/// <reference path="../ts/typings/main.d.ts" />
var smartarchive = require("./index.js");
var path = require("path");

smartarchive.get({
    from:"https://github.com/UmbrellaZone/legaldocs/archive/master.zip",
    toPath:path.resolve("./test/"),
    cb: function(){
        console.log("This is a callback")
    }
});