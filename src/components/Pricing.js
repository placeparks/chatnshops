"use client"
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button
} from "@chakra-ui/react"
import { FaCheckCircle } from "react-icons/fa"


function PriceWrapper(props) {
    const { children, noBorder, yellowCircle } = props
  
    return (
        <Box
        mb={4}
        shadow={noBorder ? "none" : "lg"}
        borderWidth={noBorder ? "0" : "1px"}
        alignSelf={{ base: "center", lg: "flex-start" }}
        borderColor={useColorModeValue("gray.200", "gray.500")}
        borderRadius={"xl"}
        width={{ base: "100%", md: "350px" }}
        pos="relative"
      >
        {children}
      </Box>
      
    )
  }
  

export default function ThreeTierPricing() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
        Choose the right package for your shop.
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
        Save even more by choosing to pay annually.
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
     <PriceWrapper noBorder>
  <Box py={4} px={12}>
    <Text fontWeight="500" fontSize="2xl">
      Free Trail
    </Text>
    <HStack justifyContent="center">
      <Text fontSize="3xl" fontWeight="600" color={"blue.400"}>
        14
      </Text>
      <Text fontSize="1xl" fontWeight="400" color={"gray.600"}>
        days
      </Text>
    </HStack>
  </Box>
  <VStack py={4}>
    <List spacing={3} textAlign="start" px={12}>
      <ListItem>
        <ListIcon as={FaCheckCircle} color="green.500" />
        1 Admin
      </ListItem>
      <ListItem>
        <ListIcon as={FaCheckCircle} color="green.500" />
        20 bills/month
      </ListItem>
      <ListItem>
        <ListIcon as={FaCheckCircle} color="green.500" />
        Smart Chat System
      </ListItem>
      <ListItem>
        <ListIcon as={FaCheckCircle} color="green.500" />
        accept payment by credit card
      </ListItem>
      <ListItem>
        <ListIcon as={FaCheckCircle} color="green.500" />
        Print receipt/package cover sheet
      </ListItem>
      <ListItem>
        <ListIcon as={FaCheckCircle} color="green.500" />
        send parcels at a special price
      </ListItem>
      <ListItem>
        <ListIcon as={FaCheckCircle} color="green.500" />
        stock management system
      </ListItem>
    </List>
  </VStack>
</PriceWrapper>

<PriceWrapper >
  <Box position="relative" bg={"white"}>
    <Box py={4} px={12}>
      <Text fontWeight="500" fontSize="2xl">
        Monthly package 30 days
      </Text>
      <HStack justifyContent="center">
        <Text
          fontSize="1xl"
          fontWeight="600"
          color={"red.400"}
          textDecoration="line-through" // Added line-through decoration
        >
          ฿19,500
        </Text>
        <Text fontSize="4xl" fontWeight="600" color={"blue.400"}>
          ฿ 950
        </Text>
        <Text fontSize="1xl" color="gray.500">
        /month
        </Text>
       
      </HStack>
      <HStack justifyContent="center">
        <Text fontSize="1xl" color="gray.500">
         * This price does not include vat.
        </Text>
</HStack>
    </Box>
    <VStack
      py={4}
      borderBottomRadius={"xl"}
    >
      <List spacing={3} textAlign="start" px={12}>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Facebook Accounts : 1 Account
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Facebook page : 1 page
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Comment Reply Enhancers : Unlimited
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Bulk Comment Reply Campaign : Unlimited
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Facebook Pages - Subscribers/Page : Unlimited
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Inbox Conversation Manager : Unlimited
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Messenger Bot - Enhancers : Broadcast : Subscriber Bulk Message Send : Unlimited
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Messenger Bot - Enhancers : Engagement : Customer Chat Plugin : Unlimited
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Messenger Bot - Enhancers : Engagement : Send To Messenger : Unlimited
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Recurring Notification : Unlimited
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Subscriber Manager : Background Lead Scan : Unlimited
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Auto Comments : Unlimited
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Comment Reply : Unlimited
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Reply to comment in inbox by ID : Unlimited
        </ListItem>
        <ListItem>
          <ListIcon as={FaCheckCircle} color="green.500" />
          Chatbot Messenger : Unlimited
        </ListItem>
      </List>

    </VStack>
  </Box>
</PriceWrapper>

        <PriceWrapper noBorder>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
            1 year package
            </Text>
            <HStack justifyContent="center">
            <Text
          fontSize="1xl"
          fontWeight="600"
          color={"red.400"}
          textDecoration="line-through" // Added line-through decoration
        >
          ฿25,000
        </Text>
        <Text fontSize="4xl" fontWeight="600" color={"blue.400"}>
                    ฿ 9,500
              </Text>
           
              <Text fontSize="1xl" color="gray.500">
                /month
              </Text>
            </HStack>
            <HStack justifyContent="center">
        <Text fontSize="1xl" color="gray.500">
         * This price does not include vat.
        </Text>
</HStack>
          </Box>
          <VStack
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Facebook Accounts : 1 Account
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Facebook page : 1 page
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Comment Reply Enhancers : Unlimited
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Bulk Comment Reply Campaign : Unlimited
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Facebook Pages - Subscribers/Page : Unlimited
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Inbox Conversation Manager : Unlimited
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Messenger Bot - Enhancers : Broadcast : Subscriber Bulk Message Send : Unlimited
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Messenger Bot - Enhancers : Engagement : Customer Chat Plugin : Unlimited
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
               
Messenger Bot - Enhancers : Engagement : Send To Messenger : Unlimited
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
               
                Recurring Notification : Unlimited
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
               
                Subscriber Manager : Background Lead Scan : Unlimited
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
               
                Auto Comments : Unlimited
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
               
                Comment Reply : Unlimited
               </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Reply to comment in inbox by ID : Unlimited
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Chatbot Messenger : Unlimited
              </ListItem>
            </List>
          
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  )
}
