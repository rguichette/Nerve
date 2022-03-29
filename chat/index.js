const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('chat world!');
});

app.listen(80, () => {
    console.log('Lets chat!');
});

//Run app, then load http://localhost:port in a browser to see the output.