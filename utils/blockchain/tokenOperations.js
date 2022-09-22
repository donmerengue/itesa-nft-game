const { abi } = require("../../public/abi");
const { ethers } = require("ethers");
const { async } = require("@firebase/util");
const axios = require("axios");

const bscProvider = new ethers.providers.JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545/",
  { name: "binance test-net", chainId: 97 }
);

const senderKey =
  "8b9d24eae4dd47e51544868ec4056fa2ad305168a8f571c31b68d580aca89c94";

// Datos del token ITGX
const tokenData = {
  tokenAddress: "0x27D7F516Ff969d67170035d0a2B1F071859F602e",
  tokenSymbol: "ITGX",
  tokenDecimals: 18,
  tokenImage: "https://i.imgur.com/G40GU3V.png",
};

// API key para usar bsc testnet
const API_KEY_BSC = "KPBWPK8YRY1BXHGUADJVGWJ9F6CBMX8DCP";

// Formatear la salida de BigInt a decimal
const formatEther = ethers.utils.formatEther;

// Address del token
const address = "0x27D7F516Ff969d67170035d0a2B1F071859F602e";

// Adress del holder
const deployer = "0x52Ec083D30192691872B60334bFDd1450C1826d9";
const franWallet = "0x39906C8A5D39fc920DF46b2aCeDc1B80e75E5b50";

// ABI del token
const BEP20_ABI = abi;

// Conectandome a un contract
const contract = new ethers.Contract(address, BEP20_ABI, bscProvider);

// Para firmar transacciones
const signer = new ethers.Wallet(senderKey, bscProvider);

// conexion al IGTX
const contractSigned = new ethers.Contract(address, BEP20_ABI, signer);

// Hash de ejemplo para ver datos de su transaccion
const hashSample =
  "0x493e306e1859dbe79c9d5195de46874244d786b62f7aecc327a16c00f1a2f378";

// Obtener el balance de un address en especifico.
const getBalance = async (address) => {
  try {
    const balanceOf = await contract.balanceOf(address);
    return formatEther(balanceOf);
  } catch (error) {
    console.log(error.message);
  }
};
//Obtener el total de tokens en IGTX.
const totalSupply = async () => {
  try {
    const total = await contract.totalSupply();
    return formatEther(total);
  } catch (error) {
    console.log(error.message);
  }
};

//Obtener el historial de transacciones
//  const historial = async () => {
//   bscProvider.getLogs(address).then((history) => {
//     history.forEach((tx) => {
//         console.log(tx);
//     })
//   });
// }

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
    );
    // esperamos que sea minado en la blockchain

    await tx.wait();
    console.log(tx);
    return "ok";
  } catch (error) {
    return error;
  }
};

//* Crear wallet
const createWallet = () => {
  const randomWallet = ethers.Wallet.createRandom();
  return {
    address: randomWallet.address,
    mnomic: randomWallet.mnemonic.phrase,
    privateKey: randomWallet.privateKey,
  };
};

//########## INTERACCION CON METAMASK ###############
//* Esto conecta
const requestAccount = async () => {
  try {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    return account;
  } catch (error) {
    console.log(error.message);
  }
};

//* Comprobar si metamask esta instalado
const isMetamaskInstalled = async () => {
  if (window.ethereum) console.log("Si, Metamask esta instalado");
  if (!window.ethereum) alert("necesitas instalar metamask");
};

// Enviar tokens al address principal desde el address logeado en Metamask
const sendFunding = async (value) => {
  // Transaccion data
  const txParams = {
    from: ethereum.selectedAddress,
    to: deployer,
    value,
  };

  // Enviar transaccion
  try {
    const txSent = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [txParams],
    });

    // Obtener data de la transaccion
    const txSentData = await bscProvider.getTransaction(txSent);
    // Esperar que la tx sea minada en la blockchain
    const txSentOk = await txSentData.wait();
    return txSentOk;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

//* Agregar Token ITGX
const addToken = async () => {
  try {
    // wasAdded es un booleano que indica si el token fue aniadido o no.
    const { tokenAddress, tokenDecimals, tokenImage, tokenSymbol } = tokenData;
    const wasAdded = await ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20", // Protocolo del token
        options: {
          address: tokenAddress, // El address del token
          symbol: tokenSymbol, // Simbolo del token
          decimals: tokenDecimals, // Decimales del token
          image: tokenImage, // Url de imagen para que se vea en metamask
        },
      },
    });
    // Solo para propositos de comprobacion
    // if (wasAdded) {
    //   console.log("Thanks for your interest!")
    // } else {
    //   console.log("Your loss!")
    // }
  } catch (addTokenError) {
    if (addTokenError.code === 4001) {
      alert("Debes añadir el token para jugar!");
    }
  }
};

//* Cambiar de chain a la de binance test
const switchNetwork = async () => {
  if (window.ethereum) {
    try {
      // Intentando conectarse a la testnet de binance
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x61" }], // Verificando el chainId (esta en hexadecimal)
      });
    } catch (switchError) {
      // El error 4902 significa que la red no esta agreagada a metamask
      // Debemos solicitar agregarla con el metodo "wallet_addEthereumChain"
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            // Los params son los datos para aniadir la red
            params: [
              {
                chainId: "0x61",
                chainName: "Smart Chain - Testnet",
                rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
                nativeCurrency: {
                  name: "BNB",
                  symbol: "BNB",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://testnet.bscscan.com"],
              },
            ],
          });
        } catch (addError) {
          console.log(addError);
        }
      }
      console.log(switchError);
    }
  } else {
    // Si metamask no esta instalado se lanzara una alerta
    alert(
      "MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html"
    );
  }
};

// ############# ENCRIPTACION WALLET? ###############

// let mnemonics = ethers.Wallet.createRandom().mnemonic

// const frase = mnemonics.phrase

// let wallet = ethers.Wallet.fromMnemonic(frase)

// let password = "tokencircle"

// function callback(progress) {
//   console.log("Encrypting: " + parseInt(progress * 100) + "% complete")
// }

// let encryptPromise = wallet.encrypt(password, callback)

// encryptPromise.then(function (json) {
//   console.log(json)
// })

// #######################################################

//* ########### TRANSACCIONES ################

// Obtener la informacion de un hash en particular en BNB
const infoTx = async (hash) => {
  try {
    const tx = await bscProvider.getTransaction(hash);
    await tx.wait();
    const objTx = {
      hash: tx.hash,
      confirmations: tx.confirmations,
      emisor: tx.from,
      receptor: tx.to,
      cantidad: formatEther(tx.value),
      red: tx.chainId === 97 ? "BSC testnet" : "No es desde BSC testnet",
    };
    return objTx;
  } catch (error) {
    console.log(error.message);
  }
};

// Obtener historial de Tx del smart contract

// Eventos de un smart contract ????????
// const transfers = async () => {
//   try {
//     const retornoTx = await contract.filters.Transfer(address)
//     console.log(retornoTx)
//   } catch (error) {
//     console.log(error.message)
//   }
// }

const getTotalTransactionsBNB = async () => {
  const resultados = await axios.get(
    "https://api-testnet.bscscan.com/api?module=account&action=txlist&address=0x52Ec083D30192691872B60334bFDd1450C1826d9&startblock=1&endblock=99999999&sort=desc&apikey=0x52Ec083D30192691872B60334bFDd1450C1826d9"
  );
  const nuevo = await resultados.data.result;
  return nuevo
};

const getTokenTransactions = async () => {
  const resultado = await axios.get(
    "https://api-testnet.bscscan.com/api?module=account&action=tokentx&contractaddress=0x27D7F516Ff969d67170035d0a2B1F071859F602e&page=1&offset=100&sort=desc&apikey=KPBWPK8YRY1BXHGUADJVGWJ9F6CBMX8DCP"
  );
  const nuevo = await resultado.data.result;
  return nuevo;
};

const convertTime = (timeStamp) => {
  const dateTx = new Date(timeStamp * 1000);
 
  return dateTx.toLocaleDateString("en-GB");
};

module.exports = {
  getBalance,
  totalSupply,
  requestAccount,
  sendTokens,
  createWallet,
  isMetamaskInstalled,
  addToken,
  switchNetwork,
  infoTx,
  getTotalTransactionsBNB,
  getTokenTransactions,
  convertTime,
  sendFunding,
};
