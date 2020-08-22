# :zap: node SOLID

## Setup

### Dependencies

- [Docker](https://docs.docker.com/docker-for-windows/install/)
- [Node.js](https://nodejs.org/en/download/)

### .env Configuration

Based on the `.env.example` file (located at the root of the project), create a `.env.local` with your local configuration.

```shell
# DATABASE
DB_HOST=
DB_NAME=
DB_PASSWORD=
DB_PORT=
DB_USERNAME=
DB_VOLUME=
DB_MAIN_SCHEMA=
DB_AUDIT_SCHEMA=

#SERVER
SERVER_PORT=3333

# LOGGING
LOGGING_COMBINED_FILE=
LOGGING_ERROR_FILE=
LOGGING_LEVEL=
LOGGING_TYPE=

# SERVER
SERVER_PORT=

```

### Installing Packages

```shell
$ npm i
```

### Configuring Docker

Running docker for mongoose:

```shell
$ make run-dev
```

## Running the Project

```shell
$ npm run dev
```

## Running Tests

```shell
$ npm run test
```