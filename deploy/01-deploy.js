// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const { getNamedAccounts, deployments, network, run } = require("hardhat");
const { verify } = require("../utils/verify");
const { networks } = require("../hardhat.config");
require("dotenv").config();
module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log(deployer);
  const args = ["0x8d657c70B6F4aB242ab80938ee3ec299EDbCb94e"];
  const raffle = await deploy("UniswapV2Factory", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: 4,
  });
  if (process.env.ETHERSCAN_API_KEY) {
    log("verfying");
    await verify(raffle.address, args);
  }
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
