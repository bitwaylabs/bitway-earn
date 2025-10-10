require("@nomicfoundation/hardhat-ethers");
const { Wallet } = require("ethers");
const { vars } = require("hardhat/config");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "testnet",
  networks: {
    testnet: {
      url: vars.get("TESTNET_RPC_URL", ""),
      accounts: [vars.get("TESTNET_PRIVATE_KEY", Wallet.createRandom().privateKey)]
    },
    mainnet: {
      url: vars.get("MAINNET_RPC_URL", ""),
      accounts: [vars.get("MAINNET_PRIVATE_KEY", Wallet.createRandom().privateKey)]
    }
  },
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "prague",
      viaIR: true
    }
  }
};
