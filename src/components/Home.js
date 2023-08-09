import React from 'react'
import Shop from '../images/shop.png'
import { TypeAnimation } from 'react-type-animation';
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  color,
  useBreakpointValue
} from "@chakra-ui/react"
import About from './About'
import WhyChatnShop from './WhyChatnShop';
import ShopSystem from './ShopSystem';
import WhatChatnShopsDo from './WhatChatnShopsDo';
import Pricing from './Pricing';
import Blog from './Blog';
import Footer from './Footer';

export default function Home() {
  return (
    <>
    <div className='home'>
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} color={"#fff"}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1
              }}
            >
            <span style={{color:"red"}}> Live,</span>  live,  <span className="blinking" style={{color:"#2d1582"}}>|</span> Post immediately, live right away, get rich money 
            <span style={{color:"#2d1582"}}>
               <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      500,
      'with systems', // initially rendered starting point
      1000,
      'ChatnShops', // 1s later
    
    ]}
    speed={50}
    style={{ fontSize: '1em' }}
    repeat={Infinity}
  />
  </span>
          </Text>
            <br />{" "}
            </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"#2d1582"}
              color={"white"}
              _hover={{
                bg: "blue.400"
              }}
            >
             Interested in applying for the Service
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={Shop}
        />
      </Flex>
    </Stack>
    </div>
    <div>
    <div id="about">
<About/>
</div>
<WhyChatnShop/>
<ShopSystem/>
<WhatChatnShopsDo/>
<div id="pricing">
<Pricing/>
</div>
<Blog/>
<Footer/>
      </div>
    </>
  )
}

