(function(){
  var request, Client, out$ = typeof exports != 'undefined' && exports || this;
  request = require('request');
  out$.Client = Client = (function(){
    Client.displayName = 'Client';
    var prototype = Client.prototype, constructor = Client;
    prototype.endPoint = 'https://api.imgur.com/3/';
    prototype.upload = function(path, cb){};
    function Client(){}
    return Client;
  }());
}).call(this);
