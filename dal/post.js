/**
 * Created with JetBrains WebStorm.
 * User: fish
 * Date: 13-2-17
 * Time: 下午9:47
 * To change this template use File | Settings | File Templates.
 */
var db = require('../config.js').db;
db.bind('post');

exports.all = function (callback) {
    db.post.find().sort({created:-1, _id:-1}).toArray(function (err, result) {
        callback(err, result)
    });
};


exports.findAll = function (skip, limit, callback) {
    db.post.find().sort({created:-1,_id:-1}).skip(skip).limit(limit).toArray(function (err, result) {
        callback(err, result)
    });
};

exports.get = function (condition, callback) {
    db.post.findOne(condition, function (err, result) {
        callback(null, result);
    });
};

exports.insert = function (obj, callback) {
    db.post.insert(obj, function (err, result) {
        callback(err, null);
    });
};

exports.update = function (old_slug, post, callback) {
    db.post.update({slug:old_slug}, {$set:post }, function (err, result) {
        callback(err, result);
    })
};

exports.delete = function (slug, callback) {

};

exports.count = function (callback) {
    db.post.count({}, function (err, count) {
        callback(err, count);
    });
};