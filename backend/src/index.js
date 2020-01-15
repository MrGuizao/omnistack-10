const express = require('express');

const app = express();

app.get('/users', (req, res) => {
     return res.send('Hello qwoqwo');
})



app.listen(process.env.port || 3333);