require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
const MATIC_RPC_URL = "https://orbital-ultra-mountain.matic-testnet.discover.quiknode.pro/9e5b846689d86deebb2e49b7d7cfeffca8b7ac23/";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
module.exports = {
  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmations: 1,
    },
    matic: {
      url: MATIC_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 80001,
      blockConfirmations: 6,
    },
  },

  solidity: "0.8.1",
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  etherscan: {
    // yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
    apiKey: {
      polygonMumbai: ETHERSCAN_API_KEY,
    },
  },
};
