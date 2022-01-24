const express = require('express');
const router = express.Router();
//Modulo Router podemos crear multiples rutas, y manterlas en archivos por separado


//Routes
router.get('/', (req, res) =>{
    //res.sendFile(path.join(__dirname, '/views/index.html'));
    res.render('index.html', {title: 'First Website'});
});

router.get('/contact', (req, res) =>{
    //res.sendFile(path.join(__dirname, '/views/index.html'));
    res.render('contact.html', {title: 'Contact Page'});
});

module.exports = router;