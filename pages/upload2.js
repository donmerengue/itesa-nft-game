import axios from "axios"
import React, { useEffect, useState } from "react"
import {
  pinataKey,
  pinataSecret,
  sendFileToIPFS,
} from "../utils/blockchain/nftOps"

const Upload = () => {
  const [fileImg, setFileImg] = useState(null)
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [desc, setDesc] = useState("")
  const [material, setMaterial] = useState("")
  const [power, setPower] = useState("")

  useEffect(() => {
    console.log(fileImg)
  }, [fileImg])

  const uploadImgHandler = async(img) => {
    const confSend = await sendFileToIPFS(img)
    return confSend
  }

  return (
    <div>
      <h2>Send NFT</h2>
      <form onSubmit={() => uploadImgHandler(fileImg)}>
        <input
          type="file"
          onChange={e => setFileImg(e.target.files[0])}
          required
        />
        {/* <input
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder="name"
          required
          value={name}
        />
        <input
          type="text"
          onChange={e => setDesc(e.target.value)}
          placeholder="desc"
          required
          value={desc}
        />
        <input
          type="text"
          onChange={e => setType(e.target.value)}
          placeholder="type"
          required
          value={type}
        />
        <input
          type="text"
          onChange={e => setMaterial(e.target.value)}
          placeholder="material"
          required
          value={material}
        />
        <input
          type="number"
          onChange={e => setPower(e.target.value)}
          placeholder="Power"
          required
          value={power}
        /> */}
        <br />
        <button type="submit">Mint NFT</button>
        {/* <Link to="/system" style={{ textDecoration: "none" }}>
          <button style={{ background: "#60e6ff" }}> Go to Admin Panal</button>
        </Link> */}
      </form>
    </div>
  )
}

export default Upload
