const { abi } = require("../../public/abi")

const { ethers } = require("ethers")
const bscProvider = new ethers.providers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545/",
  { name: "binance test-net", chainId: 97 }
)

const senderKey =
  "8b9d24eae4dd47e51544868ec4056fa2ad305168a8f571c31b68d580aca89c94"

// Formatear la salida de BigInt a decimal
const formatEther = ethers.utils.formatEther

// Address del token
const address = "0x27D7F516Ff969d67170035d0a2B1F071859F602e"

// Adress del holder
const deployer = "0x52Ec083D30192691872B60334bFDd1450C1826d9"
const franWallet = "0x39906C8A5D39fc920DF46b2aCeDc1B80e75E5b50"

// ABI del token
const BEP20_ABI = abi

// Conectandome a un contract
const contract = new ethers.Contract(address, BEP20_ABI, bscProvider)

// Para firmar transacciones
const signer = new ethers.Wallet(senderKey, bscProvider)

// conexion al IGTX
const contractSigned = new ethers.Contract(address, BEP20_ABI, signer)

// Obtener el balance de un address en especifico.
const getBalance = async address => {
  try {
    const balanceOf = await contract.balanceOf(address)
    return formatEther(balanceOf)
  } catch (error) {
    console.log(error.message)
  }
}
//Obtener el total de tokens en IGTX.
const totalSupply = async () => {
  try {
    const total = await contract.totalSupply()
    return formatEther(total)
  } catch (error) {
    console.log(error.message)
  }
}

//Interaccion con Metamask.
// Esto conecta
const requestAccount = async () => {
  try {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    })

    return account
  } catch (error) {
    console.log(error.message)
  }
}

// Para enviar tokens desde el address principal
// Metodo alternativo hasta poder mintear tokens.
const sendTokens = async (recipient, value) => {
  try {
    // Conexion a la wallet que tiene el token
    // const contractWithWallet = contract.connect(wallet)
    // transaccion
    const tx = await contractSigned.transfer(
      recipient,
      ethers.utils.parseEther(value)
    )
    // esperamos que sea minado en la blockchain
    await tx.wait()
    console.log(tx)
  } catch (error) {
    console.log(error.message)
  }
}

const createWallet = () => {
  const randomWallet = ethers.Wallet.createRandom()
  return {
    address: randomWallet.address,
    mnomic: randomWallet.mnemonic.phrase,
    privateKey: randomWallet.privateKey,
  }
}

module.exports = {
  getBalance,
  totalSupply,
  requestAccount,
  sendTokens,
  createWallet,
}
