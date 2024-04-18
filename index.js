const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const  route  = require('./public/src/routes/main');
const PORT = process.env.PORT || 8000;

// Registering partials
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Setting view engine and views directory
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for serving static files from the 'public' directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Using the route defined in './routes/main'
app.use('/', route);

// Route for rendering index page
app.get('/', (req, res) => {
    res.render('index');
});

// Route for rendering about page
app.get('/about', (req, res) => {
    res.render('about');
});

// Listening to the specified port
app.listen(PORT, () => {
    console.log(`Server is connected on port ${PORT}`);
});
