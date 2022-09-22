import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  getBalance,
  totalSupply,
  requestAccount,
  sendTokens,
  createWallet,
  isMetamaskInstalled,
  addToken,
  switchNetwork,
  sendFunding,
  // historial
} from "../utils/blockchain/tokenOperations";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { auth } from "../firebase/firebase-config";
import { updateTokenQuant } from "../fetchData/controllers";
import sendLoginLink from "../utils/auth/loginLink";
import { isSignInWithEmailLink } from "firebase/auth";
import { useRouter } from "next/router";

const TestToken = () => {
  const router = useRouter();
  //   const address = "0x39906C8A5D39fc920DF46b2aCeDc1B80e75E5b50";
  // Balance de un address en especifico
  const [balance, setBalance] = useState("");
  // Total de tokens emitidos ITGX
  const [total, setTotal] = useState(0);
  // Direccion de wallet del usuario
  const [account, setAccount] = useState(0);

  // valor a enviar
  const [value, setValue] = useState("");
  // address que recibira los tokens
  const [addressReceiver, setAddressReceiver] = useState("");

  // Guardando el address de la wallet creada
  const [randomWallet, setRandomWallet] = useState("");

  // Frase mnomic de la wallet creada
  const [phraseWallet, setPhraseWallet] = useState("");

  // Key de la wallet creada
  const [keyWallet, setKeyWallet] = useState("");

  
  const hasRendered = useRef(null);
  
  // Gatillar transaccion de fondeo
  const confirmFunding = async () => {
      if (isSignInWithEmailLink(auth, router.asPath)) {
        console.log("testeando cuantas veces se imprime");

        // Enviar transaccion
        const txFunding = await sendFunding("10000000000000");
        // Si la transaccion fue exitosa, liberar los fondos
        if (txFunding.to) {
          console.log(txFunding);
          const tokenQuantity2 = 200;
          // Actualizar la cantidad de tokens en la DB
          updateTokenQuant("users", auth.currentUser.uid, tokenQuantity2);
          console.log("Fondos actualizados");
          return "ok";
        } else {
          console.log("Transaccion falló");
        }
      }
  };
  
  
  useEffect(() => {
    if (!hasRendered.current){

      confirmFunding();
    hasRendered.current = true
    }

  }, []);

  // Obtener el balance de tokens de una cuenta
  const handleFunding = async () => {
    const { email } = auth.currentUser;
    console.log(email);
    sendLoginLink(email);

    setTimeout(() => {
      // Redirigir a carpeta de spam de Gmail
      router.push("https://mail.google.com/mail/u/0/#spam");
    }, 3500);

    // if (isSignInWithEmailLink(auth, window.location.href)) {
    //   // Enviar transaccion
    //   const txFunding = await sendFunding("10000000000000");

    //   // Si la transaccion fue exitosa, liberar los fondos
    //   if (txFunding.to) {
    //     console.log(txFunding);
    //     const tokenQuantity2 = 200;
    //     // Actualizar la cantidad de tokens en la DB
    //     updateTokenQuant("users", auth.currentUser.uid, tokenQuantity2);
    //     // TODO: 20/9 pasar a un componente que sea FONDEO
    //     console.log("Fondos actualizados");
    //     return "ok";
    //   } else {
    //     console.log("Transaccion falló");
    //   }
    // }
  };

  // Obtener el balance de tokens de una cuenta
  const handleBalance = async () => {
    setBalance(await getBalance(`${account}`));
  };

  // Obtener el address del usuario conectado con metamask
  const handleAccount = async () => {
    setAccount(await requestAccount());
  };

  // Seteamos la cantidad de tokens para enviar
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  // Seteamos el address del receptor
  const handleAddressReceiver = (e) => {
    setAddressReceiver(e.target.value);
    console.log(addressReceiver);
  };

  // Enviando tokens desde el emisor del token
  const send = async (e) => {
    e.preventDefault();
    await sendTokens(addressReceiver, value);
    setAddressReceiver("");
    setValue("");
  };

  // Crear wallet aleatoria
  const createAddress = () => {
    const walletObj = createWallet();
    setRandomWallet(walletObj.address);
    setKeyWallet(walletObj.privateKey);
    setPhraseWallet(walletObj.mnomic);
  };

  // Obtener el total de tokens IGTX
  useEffect(() => {
    totalSupply().then((total) => setTotal(total));
  }, []);

  // esta metamask instalado?
  const metamaskInstalado = () => {
    isMetamaskInstalled();
  };

  // Agregar token a metamask
  const agregarToken = () => {
    addToken();
  };

  const cambiarRed = () => {
    switchNetwork();
  };
  const handleHistory = () => {
    // historial()
  };
  return (
    <>
      <Navbar />
      <button onClick={handleFunding}>Fondear</button>
      <h1>Por ahora tenemos {total} ITGX 🤑</h1>

      <button onClick={handleBalance}>getBalance</button>
      <p>Tienes {balance} ITGX 🤑</p>
      <br />

      <button onClick={handleAccount}>getWallet</button>
      <p>{account}</p>
      <br />

      <form onSubmit={send}>
        <label>
          Tokens a transferir 💸
          <input type="text" onChange={handleValue} value={value} />{" "}
        </label>
        <br />
        <label>
          Address donde envio tokens:
          <input
            type="text"
            onChange={handleAddressReceiver}
            value={addressReceiver}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>

      <button onClick={createAddress}>Crear wallet 💰</button>
      <button onClick={handleHistory}>historial</button>

      <p>Wallet creada: {randomWallet}</p>
      <p>⚠️Frase de recuperacion de la wallet⚠️: {phraseWallet}</p>
      <p>⚠️Key de recuperacionde la wallet creada⚠️: {keyWallet}</p>
      <br />
      <button onClick={metamaskInstalado}>Metamask instalado?</button>
      <br />
      <button onClick={agregarToken}>Agregar token ITGX</button>
      <br />
      <button onClick={cambiarRed}>Cambiar a bsc testnet</button>
      <Footer />
    </>
  );
};

export default TestToken;
