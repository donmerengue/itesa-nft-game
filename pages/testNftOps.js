import axios from "axios"
import { useEffect, useState } from "react"
import { pinataKey, pinataSecret, safeMint } from "../utils/blockchain/nftOps"

const TestNftOps = () => {
  const [fileImg, setFileImg] = useState(null)
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [desc, setDesc] = useState("")
  const [material, setMaterial] = useState("")
  const [power, setPower] = useState("")

  const address = "0x52Ec083D30192691872B60334bFDd1450C1826d9"

  const sendJSONtoIPFS = async ImgHash => {
    try {
      const resJSON = await axios({
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinJsonToIPFS",
        data: {
          name: name,
          description: desc,
          attributes: [
            {
              trait_type: "Type",
              value: type,
            },
            {
              trait_type: "Material",
              value: material,
            },
            {
              display_type: "boost_number",
              trait_type: type,
              value: power,
            },
          ],
          image: ImgHash,
        },
        headers: {
          pinata_api_key: pinataKey,
          pinata_secret_api_key: pinataSecret,
        },
      })
      const tokenURI = `ipfs://${resJSON.data.IpfsHash}`
      console.log("Token URI", tokenURI)
      // mintNFT(tokenURI, currentAccount)
      safeMint(address, tokenURI)
    } catch (error) {
      console.log("JSON to IPFS: ")
      console.log(error)
    }
  }

  // Enviar imagenes a IPFS
  const sendFileToIPFS = async e => {
    e.preventDefault()
    if (fileImg) {
      try {
        const formData = new FormData()
        formData.append("file", fileImg)

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
        console.log(ImgHash)
        sendJSONtoIPFS(ImgHash)
      } catch (error) {
        console.log("Error sending File to IPFS: ")
        console.log(error)
      }
    }
  }
  useEffect(() => {
    console.log(fileImg)
  }, [fileImg])
  return (
    <form onSubmit={sendFileToIPFS}>
      <input
        type="file"
        onChange={e => setFileImg(e.target.files[0])}
        required
      />
      <input
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
      />
      <br />
      <button type="submit">Mint NFT</button>
    </form>
  )
}

export default TestNftOps
