import { getDocumento } from "../../fetchData/controllers";

export const nftPrice = (power) => {
//   const marketplaceParams = await getDocumento(
//     "gameParams",
//     "marketplaceParams"
//   );
//   const { nftPriceMultiplier } = marketplaceParams;
//   console.log("multiplier", nftPriceMultiplier)

//   return Number(power) * nftPriceMultiplier;
  return Number(power) * 10;
};
