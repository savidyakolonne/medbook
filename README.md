# 💬 MedBook Booking System

This module integrates WhatsApp messaging with MedBook using workflow automation to enable real-time appointment booking via chat.

Built using **n8n**, WhatsApp API, and the MedBook backend.

---

<p align="center">
  <img src="/docs/readmebannermedbook.png" width="600"/>
</p>

## 🚀 Features

* 📲 Book appointments via WhatsApp chat
* 🤖 Automated conversation flow (chatbot style)
* 🔄 Real-time communication with backend API
* 🧠 User state management (multi-step flow)
* 📅 Doctor, date, and time selection
* ✅ Instant booking confirmation

---

## 🧠 System Architecture

```
WhatsApp User
     ↓
WhatsApp API (Twilio / Meta)
     ↓
n8n (Workflow Automation)
     ↓
MedBook Backend (Express API)
     ↓
PostgreSQL Database
```

---

## ⚙️ Tech Stack

### Automation

* n8n

### Messaging

* WhatsApp Cloud API (Meta) or Twilio

### Backend Integration

* Node.js (Express.js)

### Database

* PostgreSQL

---

## 🔁 Workflow Overview

1. User sends a message on WhatsApp
2. Webhook receives message in n8n
3. n8n identifies user intent (booking)
4. Bot asks for required details:

   * Doctor
   * Date
   * Time
5. User responses are stored (state management)
6. n8n sends booking request to backend API
7. Backend saves appointment
8. Confirmation message sent to user

---

## 🧩 n8n Workflow Structure

* **Webhook Node** → Receives incoming WhatsApp messages
* **Function Node** → Parses message & detects intent
* **Switch Node** → Controls conversation flow
* **Database/API Node** → Stores user state
* **HTTP Request Node** → Calls MedBook backend
* **Response Node** → Sends reply back to WhatsApp

---

## 🛠️ Setup Guide

### 1. Start n8n

```bash
docker run -it --rm \
  -p 5678:5678 \
  n8nio/n8n
```

Access:

```
http://localhost:5678
```

---

### 2. Configure WhatsApp API

#### Option A: Twilio (Recommended for testing)

* Create Twilio account
* Enable WhatsApp Sandbox
* Set webhook URL to your n8n webhook

#### Option B: Meta WhatsApp Cloud API

* Create Meta Developer App
* Configure Webhooks
* Connect phone number

---

### 3. Create Webhook in n8n

* Add **Webhook Node**
* Set method: `POST`
* Copy webhook URL → paste into WhatsApp API config

---

### 4. Connect Backend API

Example endpoint:

```
POST /api/appointments
```

Example request:

```json
{
  "userId": "947xxxx",
  "doctor": "Dr Silva",
  "date": "2026-05-02",
  "time": "10:00"
}
```

---

## 🧠 State Management

To handle multi-step conversations, store user progress:

Example:

```json
{
  "userId": "947xxxx",
  "step": "SELECT_TIME",
  "doctor": "Dr Silva",
  "date": "2026-05-02"
}
```

You can store this in:

* PostgreSQL
* Redis
* Your backend API

---

## 📄 Environment Variables

Example for n8n:

```env
N8N_PORT=5678
DB_TYPE=postgresdb
DB_POSTGRESDB_DATABASE=medbook
DB_POSTGRESDB_HOST=localhost
DB_POSTGRESDB_PORT=5432
DB_POSTGRESDB_USER=postgres
DB_POSTGRESDB_PASSWORD=password
```

---

## 📸 Example Conversation

```
User: I want to book an appointment

Bot: Which doctor would you like?

User: Dr Silva

Bot: Select a date

User: Tomorrow

Bot: Choose a time

User: 10 AM

Bot: ✅ Your appointment is confirmed!
```

---

## 🔐 Notes

* Ensure webhook URLs are publicly accessible (use ngrok for local testing)
* Validate user inputs before sending to backend
* Handle edge cases (invalid date/time, doctor unavailable)

---

## 📜 License

MIT License

---

## 👨‍💻 Author

**Savidya Kolonne**
