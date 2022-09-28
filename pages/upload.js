import axios from "axios"
import React, { useEffect, useState } from "react"
import { pinataKey, pinataSecret } from "../utils/blockchain/nftOps"

const Upload = () => {
  const [fileImg, setFileImg] = useState(null)
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [desc, setDesc] = useState("")
  const [material, setMaterial] = useState("")
  const [power, setPower] = useState("")

  // const { votingSystemContract, currentAccount, setTokenID, winner } =
  //   useContext(VoterContext)

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

      // console.log("final ", `ipfs://${resJSON.data.IpfsHash}`)
      const tokenURI = `ipfs://${resJSON.data.IpfsHash}`
      console.log("Token URI", tokenURI)
      mintNFT(tokenURI, currentAccount) // pass the winner
    } catch (error) {
      console.log("JSON to IPFS: ")
      console.log(error)
    }
  }

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
        // console.log(response.data.IpfsHash);
        sendJSONtoIPFS(ImgHash)
      } catch (error) {
        console.log("File to IPFS: ")
        console.log(error)
      }
    }
  }

  const mintNFT = async tokenURI => {
    try {
      await votingSystemContract.makeAnEpicNFT(tokenURI, winner.address)

      let val = await votingSystemContract.getTokenId()
      console.log(val)
      setTokenID(parseInt(val._hex))

      setFileImg("")
      setName("")
      setDesc("")
    } catch (error) {
      console.log("Error while minting NFT with contract")
      console.log(error)
    }
  }

  useEffect(() => {
    console.log(fileImg)
  }, [fileImg])

  return (
    <div>
      <h2>Send NFT</h2>
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
        {/* <Link to="/system" style={{ textDecoration: "none" }}>
          <button style={{ background: "#60e6ff" }}> Go to Admin Panal</button>
        </Link> */}
      </form>
    </div>
  )
}

export default Upload
