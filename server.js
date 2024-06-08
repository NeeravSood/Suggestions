const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const suggestions = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi", "lemon", "mango", "nectarine"];

app.get('/suggestions', (req, res) => {
    const query = req.query.query.toLowerCase();
    const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(query));
    res.json(filteredSuggestions);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
