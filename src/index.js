const express = require('express');
const app = express();
const path = require('path');



//setings port
app.set('port', 4000);
app.set('views',path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Middlewares

//Routes
app.use(require('./routes/index'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));


//Listening the server
app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'))

});