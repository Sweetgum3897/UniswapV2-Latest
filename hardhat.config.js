require('solidity-coverage');
require("./node_modules/@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
      solidity: "0.8.17",
 
   networks: {
      hardhat: {
      blockGasLimit: 30000000,
    },    
  },
  
    gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  typechain: {
    outDir: "typechain-types",
    target: "ethers-v5",
  },
  };
