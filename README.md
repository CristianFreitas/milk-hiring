# Instalação
1 - Git clone no repositorio.
2 - Entre na raiz do projeto.
3 - Digite 'bash shell.sh local deploy'.
4 - Pronto, aplicação está rodando!

# Requisitos
1 - Mongod - https://docs.mongodb.com/manual/administration/install-on-linux/
2 - Docker - https://docs.docker.com/engine/install/ubuntu/
3 - NodeJs - https://www.geeksforgeeks.org/installation-of-node-js-on-linux/

# Routes
GET /ping - retorna pong.
POST /create
   {
      "name": "Carina",
      "type": "Mamifero",
      "weight": 1100,
      "age": 360 
    }

GET /:hash
PUT /:hash/update
DELETE /:hash/delete


