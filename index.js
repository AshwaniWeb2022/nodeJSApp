const express = require('express');
const app = express();
const path= require('path')
const PORT = process.env.PORT || 8000;

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Server is connected on port ${PORT}`);
});
