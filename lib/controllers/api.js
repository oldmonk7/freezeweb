'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Store = mongoose.model('Store');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};



exports.getStoreData = function(req, res) {
	console.log(req.query);
  Store.findOne({uuid:req.query.uuid, storeName:req.query.storeName}, function (err, things) {
    if (!err) {
    	console.log(things.storeName);
    	console.log(things);
    	var deal = {deal:"madarchod"};
      return res.send(things.deal);
    } else {
      return res.send(err);
    }
  });
};


exports.putStoreData = function(req, res) {
  return Store.findOneAndUpdate({uuid:req.body.uuid, storeName:req.body.storeName},{upsert:true},function (err, things) {
    if (!err) {
    	if(!things){
    	var store = new Store(req.body)
    	store.save();
    }
    	else {things.deal = req.body.deal;
    		things.save();}
      return res.json(201);
    } else {
      return res.send(err);
    }
  });
};

exports.postStoreData = function (req, res, next) {
  var newStore = new Store(req.body);
    newStore.save(function(err) {
    if (err) return res.json(400, err);
    return res.json(201, 'Store Created');
  });
};