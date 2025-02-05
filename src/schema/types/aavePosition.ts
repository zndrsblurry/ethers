import { GraphQLObjectType, GraphQLString } from "graphql";

export const AavePositionType = new GraphQLObjectType({
  name: "AavePosition",
  fields: {
    collateral_positions: {
      type: GraphQLString,
      description: "Total collateral base value",
    },
    borrowing_positions: {
      type: GraphQLString,
      description: "Total debt base value",
    },
    available_borrow_positions: {
      type: GraphQLString,
      description: "Available borrows base value",
    },
    liquidation_threshold: {
      type: GraphQLString,
      description: "Current liquidation threshold",
    },
    loan_to_value: {
      type: GraphQLString,
      description: "Loan to value ratio",
    },
    health_factor: {
      type: GraphQLString,
      description: "Health factor of the position",
    },
  },
});
