const path = require('path');
const express = require('express');
const app = express();

// Add middlewares
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start express server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
