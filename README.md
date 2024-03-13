## prisma-apollo-api

A simpel example of API with prisma, graphQL and apollo-server.

## .env file local

You can see `.env.example` file as a template for your local .env file.

## How to start ?

You can start the project with your local postgresql server (if you have one) or you can use the [docker-compose.yml](./docker/docker-compose.yml) for the database.

### Solution 1 (If you have POSTGRESQL installed locally)

1. Run `yarn` in a CLI.
2. Run `yarn build:db` to setup the database.
3. - Run `yarn dev` to launch in dev mode.
   - Run `yarn build` then `yarn start` to launch in production mode.

### Solution 2 (With a dockerized POSTGRESQL database)

1. Install [docker](https://docs.docker.com/get-docker/) or [docker desktop](https://docs.docker.com/desktop/install/windows-install/).
2. Run `cd docker` in a CLI.
3. Run `docker-compose up` to setup the database.
4. Run the commands from solution 1

## Playground

The app will be ready at http://localhost:<your_port>.

## View the database

You can run `yarn prisma studio` to see your database.
