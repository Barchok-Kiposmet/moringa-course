const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).json({ running: true });
  });

app.listen(PORT, () => {
    console.log("The server is running");
})