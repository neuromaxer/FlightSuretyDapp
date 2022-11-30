module.exports = {
    networks: {
        test: {
            network_id: 8545,
            accounts: 50,
        },
        develop: {
            network_id: 7545,
            accounts: 50,
        },
    },
    compilers: {
        solc: {
            version: "^0.8.16", // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            settings: {
                // See the solidity docs for advice about optimization and evmVersion
                viaIR: true,
                optimizer: {
                    enabled: true,
                    runs: 200,
                },
                //  evmVersion: "byzantium"
            },
        },
    },
};
