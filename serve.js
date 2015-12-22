#!/usr/bin/env node

var httpd = require('node-http-server');

httpd.deploy({
    port: 8888,
    root: './public/'
});
