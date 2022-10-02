const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Add middlewares
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start express server on port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
