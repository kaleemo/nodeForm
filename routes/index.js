var express = require('express');
var router = express.Router();

var dataController = require('../controllers/dataController');

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

router.get('/', dataController.entryGet);

router.post('/', dataController.entryPost);

module.exports = router;
