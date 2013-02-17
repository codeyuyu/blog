/**
 * Created with JetBrains WebStorm.
 * User: fish
 * Date: 13-2-17
 * Time: 下午9:49
 * To change this template use File | Settings | File Templates.
 */
var db = require('../config.js').db;

db.user = db.bind('user');

exports.insert = function (user, callback) {
    db.user.insert(user, function (err, result) {
        callback(err, result);
    });
};

exports.findAll = function (query, callback) {
    db.user.find(query).toArray(function (err, result) {
        callback(err, result);
    });
};

exports.get = function (name, callback) {
    db.user.find({name:name}).toArray(function (err, result) {
        callback(err, result[0]);
    });
};