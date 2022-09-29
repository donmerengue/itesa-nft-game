import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
  Input,
} from "@chakra-ui/react";
import { increment } from "firebase/firestore";
import React, {  useState } from "react";
import { useSelector } from "react-redux";
import { addNewDoc, updateData, updateTokenQuant } from "../../../fetchData/controllers";
import { auth } from "../../../firebase/firebase-config";
import { transferNft } from "../../../utils/blockchain/nftOps";

const ModalBuy = ({ isOpen,onClose, price, id, nftData, name }) => {
//   const { isOpen, onClose, onOpen, onToggle } = useDisclosure();

  const toast = useToast();
  const user = useSelector((state) => state.user);

  // valor a enviar
  const [value, setValue] = useState(price);
  // address que recibira los tokens
  const [addressReceiver, setAddressReceiver] = useState("");
  const [confirmAddress, setConfirmAddress] = useState("");

  const [loading, setLoading] = useState(false);



  // Seteamos la cantidad de tokens para enviar
  const handleValue = (e) => {
    setValue(e.target.value);
    // console.log(value);
  };

  // Seteamos el address del receptor
  const handleAddressReceiver = (e) => {
    setAddressReceiver(e.target.value);
    // console.log(addressReceiver);
  };
  const handleConfirmAddress = (e) => {
    setConfirmAddress(e.target.value);
    // console.log(confirmAddress);
  };

  const onSubmit = (data) => {
    e.preventDefault();

    console.log(data);
  };

  const buyItem = async () => {

const data = {
    tokenId:id,
    type: nftData.trait_type    , // attack defense luck
    power: nftData.value,
    user: auth.currentUser?.uid, // auth.currentUser?.uid o hardcoded
    equipped: false,
    name: name

}


    setLoading(true);
    if (addressReceiver !== confirmAddress) {
      setLoading(false);
      toast({
        title: "The address are not match",
        description: "Please try again",
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    } else {
      if (user?.tokenQuantity >= price) {
        const tx = await transferNft(addressReceiver, id);
        setLoading(false);
        onClose()
        if (tx?.to) {

           await updateTokenQuant("users", auth.currentUser?.uid, -price);
           updateData("virtualBalance","1",{ITGX:increment(price)})
           await addNewDoc("nftBought", data)

            toast({
                title: "Transaction successful",
                status: "success",
                position: "top",
                duration: 5000,
                isClosable: true,
          });
        } else {
          toast({
            title: "The address doesn't exists",
            description: "Please try again",
            status: "error",
            position: "top",
            duration: 6000,
            isClosable: true,
          });
        }
      } else {
        setLoading(false);
        toast({
          title: "Insufficient ITGX",
          description: "Please try again",
          status: "error",
          position: "top",
          duration: 6000,
          isClosable: true,
        });
      }
    }
  };


  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={onSubmit}>
          <ModalHeader mr={6}>Would you like to buy this nft?</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={5}>
            <Divider />
            <FormControl>
              <FormLabel>Price</FormLabel>
              <InputGroup size="sm">
                <Input required onChange={handleValue} value={value} disabled />
                <InputRightAddon>
                  <span>ITGX</span>
                </InputRightAddon>
              </InputGroup>

              <FormLabel mt={5}>Your wallet address</FormLabel>
              <Input
                required
                onChange={handleAddressReceiver}
                value={addressReceiver}
              />
              <FormLabel mt={5}>Confirm wallet address</FormLabel>
              <Input
                required
                onChange={handleConfirmAddress}
                value={confirmAddress}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              colorScheme="blue"
              ml={3}
              onClick={buyItem}
              isLoading={loading}
            >
              Buy
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ModalBuy;
