'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Store Schema
 */
var StoreSchema = new Schema({
  uuid: String,
  storeName: String,
  deal: String,
  url: String
});

/**
 * Validations
 */
// ThingSchema.path('awesomeness').validate(function (num) {
//   return num >= 1 && num <= 10;
// }, 'Awesomeness must be between 1 and 10');

mongoose.model('Store', StoreSchema);
