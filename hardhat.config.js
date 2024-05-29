require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  networks: {
    hardhat: {},
    dashboard: {
      url: "http://localhost:24012/rpc",
    },
    sepolia: {
      chainId: 11155111,
      url: "https://ethereum-sepolia-rpc.publicnode.com",
    },
    amoy: {
      chainId: 80002,
      url: "https://polygon-amoy-bor-rpc.publicnode.com",
    },
  },
  docgen: {
    sourcesDir: "contracts",
    outputDir: "documentation",
    templates: "templates",
    pages: "files",
    clear: true,
    runOnCompile: true,
  },

  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_KEY,
    },
  },
};
