/**
 * Created with JetBrains WebStorm.
 * User: fish
 * Date: 13-2-17
 * Time: 下午9:47
 * To change this template use File | Settings | File Templates.
 */
var db = require('../config.js').db;
db.bind('page');

exports.all = function (callback) {
    db.page.find().sort({created:-1}).toArray(function (err, result) {
        callback(err, result)
    });
};

exports.get = function (condition, callback) {
    db.page.findOne(condition, function (err, result) {
        callback(err, result);
    });
};

exports.insert = function (obj, callback) {
    db.page.insert(obj, function (err, result) {
        callback(err, result);
    });
};

exports.update = function (old_slug, page, callback) {
    db.page.update({slug:old_slug}, {$set:page }, function (err, result) {
        callback(err, result);
    })
};