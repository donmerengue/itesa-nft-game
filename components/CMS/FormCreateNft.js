import { Flex, Container } from "@chakra-ui/react"
import DetailsFormNft from "../CMS/DetailsFormNft"

const FormCreateNft = () => {
  return (
    <Container maxW="100vh" p={0}>
      <Flex  py={20}>
        <DetailsFormNft />
      </Flex>
    </Container>
  )
}

export default FormCreateNft
