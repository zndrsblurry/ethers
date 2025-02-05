export default {
  port: process.env.PORT || 3010,
  infura: {
    apiKey: process.env.INFURA_API_KEY,
    network: process.env.NETWORK || "mainnet",
  },
  aave: {
    poolAddress: {
      mainnet: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",
      goerli: "0x368EedF3f56ad10b9bC57eed4Dac65B26Bb667f6",
    },
  },
  defaultQuery: `
    query {
      aave_positions(walletAddress: "0x...") {
        collateral_positions
        borrowing_positions
        available_borrow_positions
        liquidation_threshold
        loan_to_value
        health_factor
      }
    }
  `,
};
