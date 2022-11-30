# FlightSurety

## Install

To install, download or clone the repo, then:

`npm install`
`truffle compile`

## Develop Client

To run truffle tests:

`truffle test`

## To use the dapp:

1. Run Ganache GUI with 50+ Accounts on port 7545
2. Run following commands:
   `truffle migrate`
   `npm run dapp`

To view dapp:

`http://localhost:3000`

Remember to always connect to MetaMask/Ganache before taking any actions via button in top-right corner of UI

## Oracle Server

`npm run server`  
`truffle test ./test/oracles.js`
