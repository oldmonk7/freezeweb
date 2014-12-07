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
  Store.findOne({uuid:req.query.uuid}, function (err, things) {
    if (!err && things) {
    	// console.log(things.storeName);
    	console.log(things);
      return res.send(things);
    } else {
      return res.send(err);
    }
  });
};


exports.putStoreData = function(req, res) {
	console.log(req.body);
  return Store.findOneAndUpdate({uuid:req.body.uuid, storeName:req.body.storeName},{upsert:true},function (err, things) {
    if (!err) {
    	if(!things){
    	var store = new Store(req.body)
    	store.save();
    }
    	else {things.deal = req.body.deal;
    		  things.url = req.body.url;	
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