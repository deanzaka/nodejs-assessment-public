# IBM-JTI NodeJS Assessment

This is a simple set of functions and unit tests used for a basic NodeJS Programmer assessment

## Run locally

This instruction will get the unit test running on your local machine

### Prerequisite

To run this please install latest version of:

- [NodeJS](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/get-npm)
- [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

### Run unit test

1. Navigate to the directory where is the root of this project folder.
2. Still in the directory where is the root of this project, install all its dependencies.

   ```bash
   yarn install
   ```

   Build rules are all listed in `package.json`. To re-generate
   this file (after you've installed new packages), simply you can add
   it directly on the file. If you have a problem installing the dependencies,
   please install newest version of node, npm, and yarn first.

3. Run the test.
   ```bash
   yarn test
   ```

## Run in Docker

This instruction will get the unit test running on a docker container

### Prerequisite

To run this please install latest version of [Docker Engine](https://docs.docker.com/get-docker/) in your machine

### Run unit test

1. Navigate to the directory where is the root of this project folder.
2. Still in the directory where is the root of this project, build the docker image.

   ```bash
   docker build -t node-assess:latest .
   ```

3. Run the test inside the docker container.
   ```bash
   docker run node-assess:latest
   ```

## Built With

- [NodeJS](https://nodejs.org/en/) - Node v10.16.1

## Authors

- Dean Zaka Hidayat
