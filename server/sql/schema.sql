CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    phone VARCHAR(20),
    role VARCHAR(20) DEFAULT 'patient',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    specialization VARCHAR(100) NOT NULL,
    hospital VARCHAR(150) NOT NULL,
    available_days VARCHAR(100) NOT NULL,
    available_time VARCHAR(100) NOT NULL,
    consultation_fee NUMERIC(10,2) DEFAULT 0.00,
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    status VARCHAR(20) DEFAULT 'booked',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_patient
        FOREIGN KEY (patient_id)
        REFERENCES patients(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_doctor
        FOREIGN KEY (doctor_id)
        REFERENCES doctors(id)
        ON DELETE CASCADE
);

ALTER TABLE appointments
ADD CONSTRAINT unique_doctor_slot
UNIQUE (doctor_id, appointment_date, appointment_time);