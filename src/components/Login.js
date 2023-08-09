"use client"

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link
} from "@chakra-ui/react"
import { useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { LoginSocialFacebook } from "reactjs-social-login"
import { FacebookLoginButton } from "react-social-login-buttons"
import { useNavigate } from "react-router-dom"

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false)
  const [profile, setProfile] = useState(null)
    const navigate = useNavigate()
    const handlesignup = () => {
        navigate('/signup');
      }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
          <img src="https://console.chatnshops.com/assets/img/chatnshops-logo2.png" alt="logo"/>
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
           Login to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword(showPassword => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500"
                }}
              >
           Login
              </Button>
              {!profile ? <LoginSocialFacebook
  appId="3654705374854667"
  onResolve={(data) => {
    console.log(data.data); // Log the data object inside the response
    setProfile(data.data); // Or access the necessary properties from data.data
  }}
  
  onReject={(error) => console.error(error)}
>
  <FacebookLoginButton />
</LoginSocialFacebook> :""}
{profile ? <div>
    <h1>Welcome {profile.name}</h1>
    </div> : ""
    }
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"blue.400"} href="/signup">Sign up</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
