import React, { useEffect, useRef } from "react"
import { Flex, Text } from "@chakra-ui/react"

const Messages = ({ messages }) => {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef()
    useEffect(() => elementRef.current.scrollIntoView())
    return <div ref={elementRef} />
  }

  return (
    <Flex w="100%" h="80%" overflowY="scroll" flexDirection="column" p="3">
      {messages.map((item, index) => (
        <Flex
          key={index}
          w="100%"
          justify={item.from === "me" ? "flex-start" : "flex-end"}
        >
          <Flex
            bg={item.from === "me" ? "blue.500" : "gray.100"}
            color={item.from === "me" ? "white" : "black"}
            minW="100px"
            maxW="350px"
            my="1"
            py="2"
            px="4"
            direction="column"
            borderRadius="12"
          >
            <Text fontWeight="bold">{item.from}</Text>
            <Text>{item.text}</Text>
          </Flex>
        </Flex>
      ))}
      <AlwaysScrollToBottom />
    </Flex>
  )
}

export default Messages
