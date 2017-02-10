'use strict';

const restify = require('restify');


const server = restify.createServer();
server.get('/.*/', restify.serveStatic({
    directory: './static/',
    default: 'client2.html'
}));

server.listen(3100, function() {
    console.log('%s listening at %s', server.name, server.url);
});

console.log('eidtor cms started at: ');