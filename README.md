# Web3Transactions

A web3 application using a `Solidity` `Smart Contract`, `Web3JS`, `EthersJS`, and `ReactJS`.

By using both the `client` and the `smart contract` you can send transactions via `metamask` integration and store some data about said transactions on the `ethereum blockchain` (I used the `rinkeby` test network), that data can be viewed in the `react app`.

For creating the `smart contract` I used `solidity`, and for deploying it I worked with the `hardhat` framework and some of its plugins (eg. `hardhat-deploy`).

I have created the frontend in `reactjs` with the help of `ethersjs`, and `tailwindcss` for the design.

In order to make the project work:

0. create a "development" `metamask` wallet and get some ethereum from on your preffered test network from one of the faucets
1. download the repository
2. run `npm i` in both the client and the smartcontract folder
3. create a `.env` file in the smartcontract folder
4. in the `.env` create a variable called `RINKEBY_RPC_URL` and make it equal to a link you get from `Alchemy.com` (to connect you to the selected chain, in my case `rinkeby`)
5. in the `.env` create a variable called `MNEMONIC` and make it equal to the `mnemonic` of your development `metamask` account
6. create a `.env` file in the client folder
7. in the `.env` create a variable called `REACT_APP_GIPHY_API` and make it equal to an `API Key` you get from `developers.giphy.com`
8. run `npx hardhat deploy --network your-selected-network` (my selected network was `rinkeby`)
9. get the address of your contract (it is shown in the terminal after running the previous command)
10. change the `CONTACTADDRESS` variable in the `client/src/utils/constants.js` to the contract address you have created.
11. run `npm start` in the client folder
