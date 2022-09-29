const axios = require("axios")
const API_KEY =
  "PxmqNMtrjNPYT1Jafaq0ZCDqerDwTzvSt0Bx81SysC2FL3H2vXP3Vn2xKSfkkFoj"

const tokenCircleAddress = "0x881A04306f863EE2A9491b58579e1D575fA91929"

const options = {
  method: "GET",
  url: `https://deep-index.moralis.io/api/v2/nft/${tokenCircleAddress}?chain=bsc%20testnet&format=decimal`,
  headers: {
    accept: "application/json",
    "X-API-Key": API_KEY,
  },
}

const getMetaData = async () => {
  try {
    const nftData = await axios.request(options)
    const contractNfts = await nftData.data.result
    return contractNfts
  } catch (error) {
    console.log(error)
  }
}

const convertImage = link => {
  const CID = link.slice(7)
  const linkImage = `https://ipfs.io/ipfs/${CID}`
  console.log(linkImage)
  return linkImage
}

module.exports = { getMetaData, convertImage }
