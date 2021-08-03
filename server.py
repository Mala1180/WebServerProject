from socket import *
import sys
import signal

port = 80
server_socket = socket(AF_INET, SOCK_STREAM)
server_socket.bind(("", port))
server_socket.listen(1)

print("Web Server is listening on port %d"%(port))

def signal_handler(signal, frame):
    print('You pressed Ctrl+C!')
    server_socket.close()
    sys.exit(0)

signal.signal(signal.SIGINT, signal_handler)

while True:
    print('Ready to serve...')
    # Stabilisce la connessione, ossia sul socket si prepara ad accettare connessioni
    # in entrata all'indirizzo e porta definiti
    connection_socket, addr = server_socket.accept()

    try:
        message = connection_socket.recv(1024) ## riceve il messaggio di richiesta dal client
        # controlla che il messaggio non sia vuoto
        if len(message.split()) > 0:
            # stampa a video il messaggio di richiesta del client GET...
            print(message, '::', message.split()[0], ':', message.split()[1])
            filename = message.split()[1]
            # poichè la seconda parte dell'intestazione HTTP include un '/',
            # questo indica di leggere dal secondo carattere espresso attraverso '[1:]'
            print(filename, '||', filename[1:])
            # il server apre il file
            f = open(filename[1:], 'r+')
            # bufferizza l'intero contenuto del file richiesto in un buffer temporaneo
            outputdata = f.read()
            #print(outputdata)
                
            # Invia la riga di intestazione HTTP nel socket con il messaggio OK

            connection_socket.send("HTTP/1.1 200 OK\r\n\r\n".encode())
            connection_socket.send(outputdata.encode())
            connection_socket.send("\r\n".encode())
            connection_socket.close()

    except IOError:
        # Invia messaggio di risposta per file non trovato
        connection_socket.send(bytes("HTTP/1.1 404 Not Found\r\n\r\n","UTF-8"))
        connection_socket.send(bytes("<html><head></head><body><h1>404 Not Found</h1></body></html>\r\n","UTF-8"))
        connection_socket.close()        

         
server_socket.close()
connection_socket.close()
print("Closing Server")
## Termina il programma dopo aver inviato i dati corrispondenti
sys.exit()

