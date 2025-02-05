import { ethers } from "ethers";
import config from "../config";

const INFURA_API_KEY = process.env.INFURA_API_KEY;

const AAVE_POOL_ABI = [
  `function getUserAccountData(address user) view returns (
      uint256 totalCollateralBase,
      uint256 totalDebtBase,
      uint256 availableBorrowsBase,
      uint256 currentLiquidationThreshold,
      uint256 ltv,
      uint256 healthFactor
    )`,
  `function getUserConfiguration(address user) view returns (
      uint256
    )`,
];

export interface AavePosition {
  collateral_positions: string;
  borrowing_positions: string;
  available_borrow_positions: string;
  liquidation_threshold: string;
  loan_to_value: string;
  health_factor: string;
}

export async function getAavePositions(
  walletAddress: string
): Promise<AavePosition> {
  const provider = new ethers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/${INFURA_API_KEY}`
  );

  const poolAddress = config.aave.poolAddress[config.infura.network];

  const aavePool = new ethers.Contract(poolAddress, AAVE_POOL_ABI, provider);

  const positions = await aavePool.getUserAccountData(walletAddress);

  return {
    collateral_positions: positions[0].toString(),
    borrowing_positions: positions[1].toString(),
    available_borrow_positions: positions[2].toString(),
    liquidation_threshold: positions[3].toString(),
    loan_to_value: positions[4].toString(),
    health_factor: positions[5].toString(),
  };
}
