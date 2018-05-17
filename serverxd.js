let http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ Estatus: 'deleted', error_code: -1 }));
    res.end();
}).listen(8080);