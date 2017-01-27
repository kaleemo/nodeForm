var mongoose = require('mongoose');
var moment = require('moment');

var Schema = mongoose.Schema;

var DataSchema = Schema(
  {
    entry1: {type: String, required: true, max: 255, min: 1},
    entry2: {type: String, required: false, max: 255, min: 1},
    entry3: {type: String, required: false, max: 255, min: 1}
  }
);

module.exports = mongoose.model('data', DataSchema);
