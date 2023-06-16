var express = require('express');
var mysql = require('mysql');
var bluebird = require('bluebird');

var mysql = require("mysql");

var conn = mysql.createConnection({
    user:"root",
    password:"root",
    host:"127.0.0.1",
    port:8889,
    database:"jobfun",
    multipleStatements: true
});

conn.connect();
bluebird.promisifyAll(conn);

module.exports = conn;