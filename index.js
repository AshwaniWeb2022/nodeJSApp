const express =  require('express');
const app = express();
const PORT = process.env.PORT || 8000

app.set('view engine', 'hbs');
app.set('views' , 'views');

app.get('/',(req,res) =>{
    res.render('index');
})
app.listen(PORT,() => {
    console.log(`server is connect on port ${PORT}`);
})