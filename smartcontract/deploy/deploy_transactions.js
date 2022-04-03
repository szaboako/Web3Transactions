let {networkConfig} = require("../helper-hardhat-config.js")
const { ethers } = require("hardhat");

module.exports = async ({getNamedAccounts, deployments, getChainId}) => {
    const { deploy, get, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()

    log("-------------------------------------------------------------------")
    const Transactions = await deploy("Transactions", {
        from: deployer,
        log: true,
    })
    log(`You have deployed your Transactions contract to ${Transactions.address}`)

    const accounts = await hre.ethers.getSigners()
    const signer = accounts[0]
    
    const transactionsContract = await ethers.getContractFactory("Transactions")
    const transactions = new ethers.Contract(Transactions.address, transactionsContract.interface, signer)

    const networkName = networkConfig[chainId]['name']
    log(`Verify your contract with: \n npx hardhat verify --network ${networkName} ${Transactions.address}`)
}

module.exports.tags = ['all', 'contracts', 'transactions']