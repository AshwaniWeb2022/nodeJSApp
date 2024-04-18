const express =  require('express');
const app = express();
const hbs = require('hbs');
const path= require('path')
const PORT = process.env.PORT || 8000

app.set('view engine', 'hbs');
hbs.registerPartials("views/partials")

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.get('/',(req,res) =>{
    res.render('index');
})
app.listen(PORT,() => {
    console.log(`server is connect on port ${PORT}`);
})