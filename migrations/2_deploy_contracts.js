const FlightSuretyApp = artifacts.require("FlightSuretyApp");
const FlightSuretyData = artifacts.require("FlightSuretyData");
const fs = require("fs");

module.exports = function (deployer, network, accounts) {
    // make contract owner the first registered airline by passing it to constructor
    deployer.deploy(FlightSuretyData, accounts[0]).then(() => {
        return deployer
            .deploy(FlightSuretyApp, FlightSuretyData.address)
            .then(() => {
                let config = {
                    localhost: {
                        url: "http://localhost:7545",
                        dataAddress: FlightSuretyData.address,
                        appAddress: FlightSuretyApp.address,
                    },
                };
                fs.writeFileSync(
                    __dirname + "/../src/dapp/config.json",
                    JSON.stringify(config, null, "\t"),
                    "utf-8"
                );
                fs.writeFileSync(
                    __dirname + "/../src/server/config.json",
                    JSON.stringify(config, null, "\t"),
                    "utf-8"
                );
            });
    });
};

// Accounts:
// (0) 0xfef9e1acc08407c3986378b55f984789b7ea5775
// (1) 0x53b9debb7c2bc8d40b8dc6b9fa9e9c0d79968dbe
// (2) 0xd8eb7581530f417cf2f927748815d2c78ef66cc2
// (3) 0x571d6bb1ce42fc39db68af43c849cdc6f2b8694f
// (4) 0xf3a176b1f5a860431390000414cdc0fdf1639272
// (5) 0x49f0f12c7836a49fa8446d4f452fc365ae1d5292
// (6) 0x48e230ace2601f958c920b2d704ff005f2d5fd6e
// (7) 0xdfd7ffb7191e3f8d0f49323e6bb6fc10275c018e
// (8) 0xe3fdaf3a66aeac0242729e83d6bf74522da6dca3
// (9) 0x16f3ba4479d51a368a3e02e684c0cc35c5762910
// (10) 0x87e12aafac841bc4634480101d8df4c1df8568ee
