//@ts-check
const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const usersList = [];    //array of users

router.get('/', (req, resp, next) => {
  resp.render('add-user', {
    pageTitle: 'richard Add User',
  });
});


router.post('/', (req, resp, next) => {
  console.log('Richard' + req.body.user); 
  usersList.push({
    user: req.body.user
  });
  resp.redirect('/user-list');
});

// exports.routes = router;   //you added a function to the empty object called routes and set 
//                            //set it = to the router.  and in app.js since you are returning an
//                            //object which has both routes and products.  this is the reason you have to
//                            //change the exports from modules.exports to have the more then one exports.
// exports.products = products;  the code below is the same as here

module.exports = {
  routes: router,
  usersList : usersList
};