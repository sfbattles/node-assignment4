//@ts-check
const path = require('path')
const express = require('express')
const router = express.Router();

router.use('/',(req, resp, next) => {
 resp.status(404).render('404',{pageTitle: 'Page Not Found'});   //after render first argument is the file in view folder
});                           

module.exports = router;