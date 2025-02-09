spin up the xero docker image
docker run -p 3000:3000 995ad9c09444

spin up the server
yarn dev:server

spin up the client
yarn dev

spin up the tests
yarn test --coverage

docker-compose down
docker-compose up --build

build the backend image
docker build -t showmethemoney-server -f dockerfile.backend .

create the docker network
docker network create mynetwork

1. run the xero api in the network at 3000
docker run -p 3000:3000 --network mynetwork --name xero-mock-container 995ad9c09444

2. run the showmethemoney-server
docker run -p 5001:5001 --network mynetwork --name showmethemoney-container showmethemoney-server
docker run -p 5001:5001 --network mynetwork --name showmethemoney-container \
  -e XERO_API_URL="http://xero-mock-container:3000/api.xro/2.0/Reports/BalanceSheet" \
  showmethemoney-server

build the frontend image
docker build -t showmethemoney-frontend -f dockerfile.frontend .

run the frontend image
docker run -p 3001:80 --network mynetwork --name showmethemoney-frontend-container showmethemoney-frontend



Local Steps:
1. Intall the dependencies
yarn install

2. Spin up the xero mock api
docker run -p 3000:3000 jaypeng2015/show-me-the-money

3. Spin up the local showmethemoney server
yarn dev:server

4. Spin up the frontend app using vite
yarn dev
