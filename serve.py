#!/usr/bin/env python3
"""
Local dev server that mimics Vercel's "clean URLs" behavior.
Run this instead of `python -m http.server` while testing locally.

Usage:
    python3 serve.py
    (then open http://localhost:8000)

If a request has no file extension and no exact file exists,
it automatically tries adding ".html" before giving up with a 404,
exactly like Vercel does once cleanUrls is deployed.
"""
import http.server
import os

PORT = 8000

class CleanUrlHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Strip any query string / fragment first
        clean = path.split('?')[0].split('#')[0]
        full = super().translate_path(clean)
        if not os.path.exists(full) and '.' not in os.path.basename(full):
            candidate = full + '.html'
            if os.path.exists(candidate):
                return candidate
        return full

if __name__ == '__main__':
    with http.server.HTTPServer(('', PORT), CleanUrlHandler) as httpd:
        print(f"Serving with clean-URL support at http://localhost:{PORT}")
        httpd.serve_forever()
