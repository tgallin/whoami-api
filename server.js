var express = require('express');

var app = express();

app.get('/', function(req, res) {
    var ipaddress = req.get('x-forwarded-for');
    var useragent = req.get('user-agent');
    var software = useragent.substring(useragent.indexOf('(') + 1, useragent.indexOf(')'));
    var acceptlanguage = req.get('accept-language');
    var language = acceptlanguage.substring(0, acceptlanguage.indexOf(','));
    // we want to retrieve from the header
    // {"ipaddress":"90.107.15.61","language":"en-US","software":"Windows NT 10.0; WOW64"}
    var result = {
        ipaddress: ipaddress,
        language: language,
        software: software
    };
    res.json(result);
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('app listening on port ' + port);
});
