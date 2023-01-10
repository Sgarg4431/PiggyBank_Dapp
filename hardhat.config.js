require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {

  solidity: "0.8.17",
  paths:{
    artifacts:"./src/artifacts",
  },
  networks:{
    goerli:{
      url:'https://goerli.infura.io/v3/58eac16820d74124a392d79ebf092b68',
      accounts: [process.env.private_key]
    }
  }
};
