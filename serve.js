#!/usr/bin/env node

var httpd = require('node-http-server');

var config = httpd.configTemplate();
config.contentType.svg = 'image/svg+xml';
config.contentType.pdf = 'application/pdf';
config.port = 8888;
config.root = './public/';

httpd.deploy(config);
