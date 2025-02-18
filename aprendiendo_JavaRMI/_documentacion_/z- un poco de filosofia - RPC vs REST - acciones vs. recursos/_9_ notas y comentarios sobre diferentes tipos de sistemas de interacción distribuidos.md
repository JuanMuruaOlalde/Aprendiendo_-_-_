# Sistemas de interacción entre nodos en sistemas distribuidos

## WEB Request–Response APIs

A client make a request to a server. And the server responds to the client.

### REST:

-   nouns, like /books/id
-   standard HTTP methods (GET, POST, PUT, DELETE,...) to retrieve, create, update, delete,...
-   standard response status codes

### RPC:

-   verbs, like /library.doSomething
-   GET for read-only requests
-   POST for all other requests

### GraphQL:

-   need only a single URL enpoint
-   a query language for APIs - allows clients to define the structure of the query (client specify just the data she/he want and server returns just that data)

## WEB Event-Driven APIs

To share data about events in real time, avoiding the need for the client polling the server at regular intervals.

### WebHooks:

-   server POST to client
-   not posible if client is behind firewall or similar

### WebSockets:

-   two-way streaming communication chanel
-   often used by real-time applications

### HTTP Streaming:

-   indefinite number of responses to a request, until connection closes

## Message-oriented paradigms

Implement an asynchronous communication pattern

### Publish/Subscribe

-   a node produces messages about a topic
-   interested nodes subscribe to it

### MQ (Message Queue)

-   a node maintains a queue of messages about a topic
-   other nodes put messages to it
-   interested nodes subscribe to it

## Outdated paradigms

### SOA:

-   a request-response standard, interoperable between different vendors/systems
-   popular in the 90s and 00s

### CORBA:

-   a remote-procedure-call standard, interoperable between different vendors/systems
-   popular in the 90s and 00s

### Java-RMI:

-   a remote-procedure-call tool, specific for Java

### Java-JMS (Jakarta Messaging):

-   a message-oriented tool, specific for Java
