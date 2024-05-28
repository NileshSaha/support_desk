# Support Desk

### Environment Setup

Create a .env file in root of the project and paste the following:
```sh
NODE_ENV = development
PORT = 5000
MONGO_URI="mongodb://root:example@mongo:27017/support_desk?authSource=admin"
JWT_SECRET=eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxNjkwMDA5NSwiaWF0IjoxNzE2OTAwMDk1fQ
```

There is also an .env.example in the root folder for reference.

## Project setup

To setup the project, one has to make sure, Docker and docker compose installed. Makefile will have 
all the commands required to setup the required dependencies and modules to run the project.

```sh
make dev
```