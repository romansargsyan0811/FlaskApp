const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const input = req.body.input;
    const output = "You entered: " + input;
    res.json({ output });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});