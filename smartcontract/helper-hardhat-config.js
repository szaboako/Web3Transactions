const networkConfig = {
    31337: {
        name: 'localhost'
    },
    4: {
        name: 'rinkeby'
    }
}

const developmentChains = ["hardhat", "localhost"]

const getNetworkIdFromName = async (networkIdName) => {
    for (const id in networkConfig) {
        if (networkConfig[id]['name'] == networkIdName) {
            return id
        }
    }
    return null
}

module.exports = {
    networkConfig,
    developmentChains,
    getNetworkIdFromName,
}