
var Hapi = require('hapi');
var Inert = require('inert');

var server = new Hapi.Server();

server.connection({
    port: 8010
});

server.register(Inert, function () {

    server.route({
        method: 'GET',
        path: '/{path*}',
        handler: {
            directory: {
                path: 'build'
            }
        }
    });
});

server.route({
    method: 'GET',
    path: '/api/slow',
    handler: function (request, reply) {

        setTimeout(function () {
            return reply({ count: 42, date: new Date() });
        }, 2500);
    }
});

server.path(__dirname);

server.start(function (err) {

    if (err) {
        return console.error('Error:', err);
    }
    console.log('Server started: http://localhost:8010/');
});

