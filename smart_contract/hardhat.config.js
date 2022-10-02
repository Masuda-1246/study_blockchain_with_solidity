//https://eth-goerli.g.alchemy.com/v2/pUthu4s8I7nqm8kWOdFvkxqIS5BvXE_l
require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork:"goerli",
  solidity: "0.8.0",
  networks:{
    goerli:{
      url:"https://eth-goerli.g.alchemy.com/v2/pUthu4s8I7nqm8kWOdFvkxqIS5BvXE_l",
      accounts:[
        "59f9e65b69e87c52248074a512fe98a84fbd621d3eee4d8faba273b58f2c7a2f",
      ],
    },
  },
};
