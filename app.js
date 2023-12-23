const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000; // Choose a port number you prefer

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JavaScript, etc.) from a "public" folder
app.use(express.static('public'));

// Route to handle form submission
app.post('/submit', (req, res) => {
  // Retrieve form data from the request body
  const { name, email, subject, message } = req.body;

  // Here you can perform any additional operations, like sending emails, saving to a database, etc.
  // For this example, we'll just log the form data to the console.

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);

  // Send a response back to the frontend
  res.send('Form submitted successfully!');
});

// Route to serve the hireme.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'hireme.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
