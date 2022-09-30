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
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const ModalChat = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Box padding={"20px"}>
            <ModalCloseButton className="bg-gray-900 text-white" />
          </Box>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="text-1xl text-bold  bg-orange-300"
                  >
                    {"HOW CAN I REGISTER ?"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {
                  "You must go to the navbar an on click on login button, then will appear the login form. At the end, choose create your account"
                }
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="text-1xl text-bold   bg-orange-300"
                  >
                    {"HOW CAN I BUY ITGX ?"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {
                  "You must go to the navbar an on click on itgx button, after that you can choose the operation that you want to do."
                }
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="text-1xl text-bold  bg-orange-300"
                  >
                    {" HOW CAN I BUY NFTS ?"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {
                  "Click on marketplace's navbar button, then you can see the nfts availables"
                }
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    className="text-1xl text-bold  bg-orange-300"
                  >
                    {"WHICH ONE ARE THE GAME'S RULES ?"}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {
                  "First of all, you must buy at least one nft to start the battle. Intergalaxy is a 2D play to earn NFT game linked to Metamask. Your mission will be to travel around the galaxy winning as many battles as possible. Intergalaxy has 5 arenas, and each will host a different background combat grouping fighters by level. As your performance increases, you will be able to buy NFT accessories, which will help you gain a greater advantage over your rival. If you win the batle Integalaxy will give a two tokens ITGX gifts. What are you waiting for playing?"
                }
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalChat;
