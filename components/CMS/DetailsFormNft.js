import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Textarea,
} from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import {
  pinataKey,
  pinataSecret,
  safeMint,
} from "../../utils/blockchain/nftOps"

const DetailsFormNft = () => {
  // Estados para metadata
  const [fileImg, setFileImg] = useState(null)
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [desc, setDesc] = useState("")
  const [material, setMaterial] = useState("")
  const [power, setPower] = useState("")
  const [loading, setLoading] = useState(false)
  const [counter, setCounter] = useState(0)

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
      safeMint(address, tokenURI).then(() => {
        setLoading(false)
        setCounter(counter + 1)
      })
    } catch (error) {
      console.log("JSON to IPFS: ")
      console.log(error)
    }
  }

  const sendFileToIPFS = async e => {
    e.preventDefault()
    setLoading(true)
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

  const clearData = () => {
    // setFileImg({})
    setName("")
    setType("")
    setDesc("")
    setMaterial("")
    setPower("")
    setCounter(0)
  }

  return (
    <form onSubmit={sendFileToIPFS}>
      <VStack
        w="full"
        h="full"
        p={10}
        spacing={7}
        alignItems="flex-start"
        bg="gray.50"
      >
        <VStack spacing={2} alignItems="flex-start">
          <Heading size="2xl">NFT Mint</Heading>
          <Text></Text>
        </VStack>

        <SimpleGrid columns={2} columnGap={3} rowGap={5} w="full">
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Upload Image</FormLabel>
              <Input
                placeholder="place your image"
                // value={fileImg}
                type="file"
                onChange={e => setFileImg(e.target.files[0])}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                value={name}
                placeholder="NFT's Name"
                onChange={e => setName(e.target.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Power</FormLabel>
              <Input
                value={power}
                placeholder="NFT's Power"
                onChange={e => setPower(e.target.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Description</FormLabel>
              {/* <Input placeholder="Blvd. Broken Dreams 21" type="text" /> */}
              <Textarea
                value={desc}
                placeholder="NFT's description"
                onChange={e => setDesc(e.target.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Material</FormLabel>
              <Input
                placeholder="NFT's Material"
                value={material}
                onChange={e => setMaterial(e.target.value)}
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Type</FormLabel>
              <Select
                // value={type}
                placeholder="Select option"
                onClick={e => setType(e.target.value)}
              >
                <option value="attack">Attack</option>
                <option value="defense">Defense</option>
                <option value="luck">Luck</option>
              </Select>
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <Button size="lg" w="full" type="submit" isLoading={loading}>
              Mint ({counter} items)
            </Button>
          </GridItem>

          <GridItem colSpan={2}>
            <Button size="lg" w="full" onClick={clearData}>
              Clear Data
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </form>
  )
}

export default DetailsFormNft
