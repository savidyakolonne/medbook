const express = require('express') ;

const app = express() ;

const PORT = 5001 ;

app.get("/", (req, res) => {
    res.send("Server is working on this")
})

app.listen(PORT, () => {
    console.log(`Server running on PORT http://localhost:${PORT}`) ;
})