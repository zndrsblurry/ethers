import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { AavePositionType } from "./types/aavePosition";
import { getAavePositions } from "../services/aave";

export const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    aave_positions: {
      type: AavePositionType,
      args: {
        walletAddress: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (_, { walletAddress }) => {
        return await getAavePositions(walletAddress);
      },
    },
  },
});
