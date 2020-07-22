# Instalação <br />
1 - Git clone no repositorio. <br />
2 - Entre na raiz do projeto. <br />
3 - Digite 'bash shell.sh local deploy'. <br />
4 - Pronto, aplicação está rodando! <br />

# Requisitos
1 - Mongod - https://docs.mongodb.com/manual/administration/install-on-linux/ <br />
2 - Docker - https://docs.docker.com/engine/install/ubuntu/ <br />
3 - NodeJs - https://www.geeksforgeeks.org/installation-of-node-js-on-linux/ <br />

# Routes
GET /ping - retorna pong. <br />
POST /create
   {
      "name": "Carina",
      "type": "Mamifero",
      "weight": 1100,
      "age": 360 
    }
<br />
GET /:hash <br />
PUT /:hash/update <br />
DELETE /:hash/delete <br />
