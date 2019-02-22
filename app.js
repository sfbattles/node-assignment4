const path = require('path');
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const userData = require('./routes/add-user.js');
const userListRoute = require('./routes/user-list.js');
const pageNotFound = require('./routes/page-not-found.js');

app.use(bodyParser.urlencoded({
    extended: true
})); //this does the buffer and added chuck together

app.use(userData.routes);  //use the route
app.use(userListRoute);
app.use(pageNotFound);
app.listen(3000);
