/**
 * Created with JetBrains WebStorm.
 * User: fish
 * Date: 13-2-17
 * Time: 下午9:47
 * To change this template use File | Settings | File Templates.
 */

    //todo 添加留言删除功能 = =好牛逼还可以这么用
var db = require('../config.js').db;
db.bind('comment');

exports.all = function (condition, callback) {
    db.comment.find(condition).limit(100).sort({created:-1,_id:-1}).toArray(function (err, result) {
        callback(err, result);
    });
};

exports.insert = function (obj, callback) {
    db.comment.insert(obj, function (err, result) {
        callback(err, result);
    });
};

exports.findByPostid = function (post_id, callback) {
    db.comment.find({post_id:post_id}).sort({created:1}).toArray(function (err, result) {
        callback(err, result);
    });
};