const { abiNft } = require("../../public/abiNft")
const { ethers } = require("ethers")
const { abiNftBurn } = require("../../public/abiNftBurn")
const bscProvider = new ethers.providers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545/",
  { name: "binance test-net", chainId: 97 }
)

const pinataKey = "93c4f9b68154e4c57e7b"
const pinataSecret =
  "53cc15509bfdf113e4aea9aba84649f3ddcc10042e2e8c2f4672b89bd29d2fdc"

const BEP721_ABI = abiNftBurn

const key = "8b9d24eae4dd47e51544868ec4056fa2ad305168a8f571c31b68d580aca89c94"

const nftAddress = "0xa8cf99020aF1BbfB904AB33a055C08354082DDe4"
const nftAddressBETA = "0xD41e4536aFf36F604199dd9148Ae73b87614B66f"
const nftAddressTokenCircle = "0x881A04306f863EE2A9491b58579e1D575fA91929"

const contract = new ethers.Contract(
  nftAddressTokenCircle,
  BEP721_ABI,
  bscProvider
)

const signer = new ethers.Wallet(key, bscProvider)

const contractSigned = new ethers.Contract(
  nftAddressTokenCircle,
  BEP721_ABI,
  signer
)

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
    console.log(name)
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
const transferNft = async (to, id) => {
  try {
    const tx = contractSigned["safeTransferFrom(address,address,uint256)"](
      custodio,
      to,
      id
    )
    const response = await tx
    return response
  } catch (error) {
    console.log(error)
  }
}

// BURN

const burnNft = async id => {
  try {
    const txBurn = await contractSigned.burn(id)
    const response = await txBurn
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

// Send img to IPFS
const sendFileToIPFS = async img => {
  // e.preventDefault()
  // Si hay una imagen cargada
  if (img) {
    try {
      const formData = new FormData()
      formData.append("file", img)

      // Hago un post al api de pinata
      const resFile = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
        data: formData,
        headers: {
          pinata_api_key: pinataKey,
          pinata_secret_api_key: pinataSecret,
          "Content-Type": "multipart/form-data",
        },
      })

      const ImgHash = `ipfs://${resFile.data.IpfsHash}`
      console.log(response.data.IpfsHash)
      console.log(ImgHash)
      // sendJSONtoIPFS(ImgHash)
    } catch (error) {
      console.log("File to IPFS: ")
      console.log(error)
    }
  }
}

// Mintear NFT

const safeMint = async (address, URI) => {
  try {
    const mint = await contractSigned.safeMint(address, URI)
    const response = await mint
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  transferNft,
  getName,
  getSymbol,
  viewURI,
  burnNft,
  pinataKey,
  pinataSecret,
  safeMint,
}
