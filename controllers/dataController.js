var Data = require('../models/data');
var async = require('async');


//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

exports.entryGet = function(req, res, next) {

  Data.find()
    .exec(function (err, dataList) {
      if (err) {return next(err); }
      console.log(dataList[0].entry1)
      res.render('index', {title: 'Data List', dataList: dataList});
    })
};


exports.entryPost = function(req, res, next) {

  //req.checkBody
  //req.sanitize

  req.checkBody('entry1', 'Specify entry1 pls').notEmpty();

  req.sanitize('entry1').escape().trim();
  req.sanitize('entry2').escape().trim();
  req.sanitize('entry3').escape().trim();

  var errors = req.validationErrors();

  var newData = new Data(
    { entry1: req.body.entry1,
      entry2: req.body.entry2,
      entry3: req.body.entry3
    });

  if (errors) {
    res.render('index', {title: 'Oops!'});
    return;
  }
  else {
    newData.save(function (err) {
      if(err) {return next(err); }
      Data.find()
        .exec(function (err, dataList) {
          if (err) {return next(err); }
          res.render('index', {title: 'Data List', dataList: dataList});
        })
    })
  }
};
