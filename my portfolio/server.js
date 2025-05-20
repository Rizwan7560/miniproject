const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, '.')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Form submission endpoint
app.post('/submit-form', (req, res) => {
    console.log('Form submission:', req.body);
    // Here you would typically:
    // 1. Validate the data
    // 2. Send an email (using Nodemailer)
    // 3. Save to database if needed
    res.json({ success: true, message: 'Form submitted successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});