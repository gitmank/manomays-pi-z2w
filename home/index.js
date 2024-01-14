const express = require('express');
const path = require('path');

const app = express();
const port = 2002;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pi-home.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
