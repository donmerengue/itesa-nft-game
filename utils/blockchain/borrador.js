const { ethers } = require("ethers")
const bscProvider = new ethers.providers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545/",
  { name: "binance test-net", chainId: 97 }
)

// Funcion para obtener balance
const main = async () => {
  try {
    const balance = await bscProvider.getBalance(address)
    console.log(ethers.utils.formatEther(balance))
  } catch (error) {
    console.log(error.message)
  }
}

// INFO TOKEN READ ONLY OPERATIONS
/// buscar abi

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

// Mostrando el nombre de la coin
const main = async () => {
  try {
    const name = await contract.name()
    const symbol = await contract.symbol()
    const totalSupply = await contract.totalSupply()
    const balanceOf = await contract.balanceOf(franWallet)
    console.log(ethers.utils.formatEther(balanceOf))
  } catch (error) {
    console.log(error.message)
  }
}




// SEND BNB

const sender = "0x52Ec083D30192691872B60334bFDd1450C1826d9"
const recipient = "0x39906C8A5D39fc920DF46b2aCeDc1B80e75E5b50"

const senderKey =
  "8b9d24eae4dd47e51544868ec4056fa2ad305168a8f571c31b68d580aca89c94"

// Para firmar transacciones
const wallet = new ethers.Wallet(senderKey, bscProvider)

const main = async () => {
  try {
    // sender balance before tx
    // const senderBalance = await bscProvider.getBalance(sender)
    // const recipientBalance = await bscProvider.getBalance(recipient)
    // console.log("Sender before:", formatEther(senderBalance))
    // console.log("Receiver before:", formatEther(recipientBalance))

    // Send BNB
    const tx = await wallet.sendTransaction({
      to: recipient,
      value: ethers.utils.parseEther("0.01"),
    })
    // Fetch tx
    await tx.wait()
    console.log(tx)

  } catch (error) {
    console.log(error.message)
  }
}

// SIGNED OPERATIONS TOKEN


const sender = "0x52Ec083D30192691872B60334bFDd1450C1826d9"
const recipient = "0x39906C8A5D39fc920DF46b2aCeDc1B80e75E5b50"
const BEP20_ABI = abi

const senderKey =
  "8b9d24eae4dd47e51544868ec4056fa2ad305168a8f571c31b68d580aca89c94"

// Para firmar transacciones
const wallet = new ethers.Wallet(senderKey, bscProvider)
// Address del smart contract del token IGTX
const addressContract = "0x27D7F516Ff969d67170035d0a2B1F071859F602e"
// conexion al IGTX
const contract = new ethers.Contract(addressContract, BEP20_ABI, wallet)

// const contract = new ethers.Contract(addressContract, BEP20_ABI, bscProvider)

const main = async () => {
  try {
    // Conexion a la wallet que tiene el token
    // const contractWithWallet = contract.connect(wallet)
    // transaccion
    const tx = await contract.transfer(recipient, ethers.utils.parseEther("2"))
    // esperamos que sea minado en la blockchain
    await tx.wait()

    console.log(tx)
  } catch (error) {
    console.log(error.message)
  }
}

// INTERACCION CON METAMASK

const prueba = () => {
  const [account, setAccount] = useState(0)
  const [balance, setBalance] = useState(0)

  async function requestAccount() {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })
      setAccount(accounts)
    } catch (error) {
      console.log(error.message)
    }
  }

  const bscProvider = new ethers.providers.JsonRpcProvider(
    "https://data-seed-prebsc-1-s1.binance.org:8545/",
    { name: "binance test-net", chainId: 97 }
  )

  const getBalan = async () => {
    try {
      const balance = await bscProvider.getBalance(`${account}`)
      console.log(ethers.utils.formatEther(balance))
      setBalance(ethers.utils.formatEther(balance))
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <button onClick={requestAccount}>adquirir</button>
      <button onClick={getBalan}>balance</button>
      <p>{account}</p>
      <p>{balance}</p>
    </>
  )
}

export default prueba


// CREACION DE WALLET

const ethers = require("ethers")

const wallet = ethers.Wallet.createRandom()

console.log("Address:", wallet.address)
console.log("mnmonic", wallet.mnemonic.phrase)
console.log("privateKey", wallet.privateKey)