//@ts-check

const express = require('express');

const userData = require('./add-user.js');
const router = express.Router();

router.get('/user-list',(req,resp,next) => {
  console.log(userData.usersList);
  const usersList = userData.usersList;
    resp.render('user-list', {
        pageTitle: 'Users List',
        users: usersList
      });
});

module.exports = router;