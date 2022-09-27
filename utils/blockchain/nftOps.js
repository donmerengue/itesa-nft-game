const { abiNft } = require("../../public/abiNft")
const { ethers } = require("ethers")

const bscProvider = new ethers.providers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545/",
  { name: "binance test-net", chainId: 97 }
)

const BEP721_ABI = abiNft

const key = "8b9d24eae4dd47e51544868ec4056fa2ad305168a8f571c31b68d580aca89c94"

const nftAddress = "0xa8cf99020aF1BbfB904AB33a055C08354082DDe4"

const contract = new ethers.Contract(nftAddress, BEP721_ABI, bscProvider)

const signer = new ethers.Wallet(key, bscProvider)

const contractSigned = new ethers.Contract(nftAddress, BEP721_ABI, signer)

//############## READ ONLY ##################
// Ver metadatos de un NFT
const viewURI = async id => {
  try {
    const URI = await contract.tokenURI(id)
    console.log(URI)
  } catch (error) {
    console.log(error)
  }
}

// Obtener simbolo del smart contract del NFT
const getSymbol = async () => {
  try {
    const symbol = await contractSigned.symbol()
    console.log(symbol)
    return symbol
  } catch (getSymbolError) {
    console.log(getSymbolError)
  }
}

// Obtener nombre del smart contract
const getName = async () => {
  try {
    const name = await contract.name()
    return name
  } catch (error) {
    console.log(error)
  }
}

// ############## WRITE ######################

// Cuenta custodio
const custodio = "0x52Ec083D30192691872B60334bFDd1450C1826d9"
// Cuenta prueba
// const addres2 = "0x073aDdE0dFCA0F57CDE5dc82AF34636CD648732E"

// Transferir propiedad NFT
const transferNft = async (custodio, to, id) => {
  try {
    const tx = contractSigned["safeTransferFrom(address,address,uint256)"](
      custodio,
      to,
      id
    )
    const response = await tx
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

// transferNft(custodio, addres2, 1)

// const transfer = (from, to, id) => {
//   contractSigned["safeTransferFrom(address,address,uint256)"](
//     from,
//     to,
//     id
//   )
//     .then(tx => console.log(tx))
//     .catch(error => console.log(error.message))
// }

// transfer(addres1, addres2, 5)

module.exports = {
  transferNft,
  getName,
  getSymbol,
  viewURI,
}
