spin up the xero docker image
docker run -p 3000:3000 995ad9c09444

spin up the server
yarn dev:server

spin up the client
yarn dev

spin up the tests
yarn test --coverage
