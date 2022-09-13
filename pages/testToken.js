import React, { useEffect, useState } from "react"
import {
  getBalance,
  totalSupply,
  requestAccount,
  sendTokens,
  createWallet,
} from "../utils/blockchain/tokenOperations"

const TestToken = () => {
  //   const address = "0x39906C8A5D39fc920DF46b2aCeDc1B80e75E5b50";
  // Balance de un address en especifico
  const [balance, setBalance] = useState("")
  // Total de tokens emitidos ITGX
  const [total, setTotal] = useState(0)
  // Direccion de wallet del usuario
  const [account, setAccount] = useState(0)

  // valor a enviar
  const [value, setValue] = useState("")
  // address que recibira los tokens
  const [addressReceiver, setAddressReceiver] = useState("")

  // Guardando el address de la wallet creada
  const [randomWallet, setRandomWallet] = useState("")

  // Frase mnomic de la wallet creada
  const [phraseWallet, setPhraseWallet] = useState("")

  // Key de la wallet creada
  const [keyWallet, setKeyWallet] = useState("")

  // Obtener el balance de tokens de una cuenta
  const handleBalance = async () => {
    setBalance(await getBalance(`${account}`))
  }

  // Obtener el address del usuario conectado con metamask
  const handleAccount = async () => {
    setAccount(await requestAccount())
  }

  // Seteamos la cantidad de tokens para enviar
  const handleValue = e => {
    setValue(e.target.value)
  }

  // Seteamos el address del receptor
  const handleAddressReceiver = e => {
    setAddressReceiver(e.target.value)
    console.log(addressReceiver)
  }

  // Enviando tokens desde el emisor del token
  const send = async e => {
    e.preventDefault()
    await sendTokens(addressReceiver, value)
    setAddressReceiver("")
    setValue("")
  }

  // Crear wallet aleatoria
  const createAddress = () => {
    const walletObj = createWallet()
    setRandomWallet(walletObj.address)
    setKeyWallet(walletObj.privateKey)
    setPhraseWallet(walletObj.mnomic)
  }

  // Obtener el total de tokens IGTX
  useEffect(() => {
    totalSupply().then(total => setTotal(total))
  }, [])

  return (
    <>
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
          <input
            type="text"
            onChange={handleValue}
            value={value}
          />{" "}
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
      <p>Wallet creada: {randomWallet}</p>
      <p>⚠️Frase de recuperacion de la wallet⚠️: {phraseWallet}</p>
      <p>⚠️Key de recuperacionde la wallet creada⚠️: {keyWallet}</p>
    </>
  )
}

export default TestToken
