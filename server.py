import sys
import signal
import socketserver as socket
import http.server as http

# Legge il numero della porta dalla riga di comando
if sys.argv[1:]:
    port = int(sys.argv[1])
else:
    port = 8080

server_socket = socket.ThreadingTCPServer(("", port), http.SimpleHTTPRequestHandler)
server_socket.allow_reuse_address = True
server_socket.daemon_threads = True

print("Web Server is listening on port %d" % port)


def signal_handler(signal, frame):
    print("Exiting server (Ctrl + C)")
    try:
        if server_socket:
            server_socket.server_close()
    finally:
        sys.exit(0)


signal.signal(signal.SIGINT, signal_handler)

try:
    while True:
        print("Ready to serve...")
        server_socket.serve_forever()

except KeyboardInterrupt:
    pass


server_socket.server_close()
