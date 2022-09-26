import React, { useEffect, useState } from "react"
import { getMetaData, convertImage } from "../utils/blockchain/nftFetch"

const TestNfts = () => {
  const [nftMetadata, setNftMetadata] = useState([])
  useEffect(() => {
    getMetaData().then(metadata => setNftMetadata(metadata))
  }, [])

  // const img = convertImage(JSON.parse(nftMetadata[1].metadata).image)
  // console.log(img)

  return nftMetadata.length > 0 ? (
    <>
      <strong>Details</strong>
      <p>TYPE: {nftMetadata[1].token_address}</p>
      <p>Token ID: {nftMetadata[1].token_id}</p>
      <p>Token Standard: {nftMetadata[1].contract_type}</p>
      {/* <p>{console.log(nftMetadata[1].metadata.name)}</p> */}
      <strong>Properties</strong>
      <p>{console.log(JSON.parse(nftMetadata[1].metadata).attributes)}</p>
      <img src={convertImage(JSON.parse(nftMetadata[1].metadata).image)} />

      <ol>
        {JSON.parse(nftMetadata[1].metadata).attributes.map(obj => {
          return (
            <li>
              {obj.trait_type}: {obj.value}
            </li>
          )
        })}
      </ol>
    </>
  ) : (
    <>
      <p>No hay datos cargados</p>
    </>
  )
}

export default TestNfts
