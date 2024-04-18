const express = require('express');
const router = express.Router();

// Define route handlers
router.get('/', (req, res) => {
    res.render('index');
});
router.get('/about', (req, res) => {
    res.render('about');
});

// Export router
module.exports = router;
