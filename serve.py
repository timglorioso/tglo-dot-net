#!/usr/bin/env python3

import http.server
import os


class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):

    # override: disable default stderr logging
    def log_message(self, format, *args):
        pass


def main():

    host = ('localhost', 8888)
    httpd = http.server.HTTPServer(host, MyHTTPRequestHandler)
    os.chdir('./public')
    print('Started serving ' + host[0] + ':' + str(host[1]))
    httpd.serve_forever()


if __name__ == '__main__':
    main()
