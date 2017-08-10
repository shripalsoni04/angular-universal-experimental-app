// Load zone.js for the server.
require('zone.js/dist/zone-node');
require('reflect-metadata');
var fs = require("fs");

// Import renderModuleFactory from @angular/platform-server.
var renderModuleFactory = require('@angular/platform-server').renderModuleFactory;

// Import the AOT compiled factory for your AppServerModule.
// This import will change with the hash of your built server bundle.
var AppServerModuleNgFactory = require('./dist-server/main.bundle').AppServerModuleNgFactory;

// Load the index.html file.
var index = fs.readFileSync('./src/index.html', 'utf8');

// Render
renderModuleFactory(AppServerModuleNgFactory, { document: index, url: '/' }).then(function (html) {
   fs.writeFileSync('dist-server/index.html', html);
});

renderModuleFactory(AppServerModuleNgFactory, { document: index, url: '/first.html' }).then(function (html) {
   fs.writeFileSync('dist-server/first.html', html);
});

renderModuleFactory(AppServerModuleNgFactory, { document: index, url: '/second.html' }).then(function (html) {
   fs.writeFileSync('dist-server/second.html', html);
});
