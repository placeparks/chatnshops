import React, { useState } from "react"
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Select,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Checkbox,
  Alert,
  AlertIcon
} from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { LoginSocialFacebook } from "reactjs-social-login"
import { FacebookLoginButton } from "react-social-login-buttons"
import { useNavigate } from "react-router-dom"

export default function SignupCard() {

    const [profile, setProfile] = useState(null)
        const [showPassword, setShowPassword] = useState(false)
        const [showConfirmPassword, setShowConfirmPassword] = useState(false)
        const [captchaValue, setCaptchaValue] = useState('')
        const [num1] = useState(Math.floor(Math.random() * 10)) // Random number 1
        const [num2] = useState(Math.floor(Math.random() * 10)) // Random number 2
        const captchaResult = num1 + num2
        const [isAgreed, setIsAgreed] = useState(false)
        const [isCheckboxError, setIsCheckboxError] = useState(false)
        const [isFormError, setIsFormError] = useState(false);
        const navigate = useNavigate()
        const [formData, setFormData] = useState({
            name: "",
            telephoneNumber: "",
            email: "",
            storeName: "",
            password: "",
            confirmPassword: "",
          })
        
          const handleChange = (e) => {
            const { name, value } = e.target
            setFormData({ ...formData, [name]: value })
          }
        
          const handleSignup = () => {
            const { name, telephoneNumber, email, storeName, password, confirmPassword } = formData;
          
            if (!isAgreed) {
              setIsCheckboxError(true);
              return;
            }
          
            if (parseInt(captchaValue) !== captchaResult) {
              alert('Captcha is incorrect!');
              return;
            }
          
            if (!name || !telephoneNumber || !email || !storeName || !password || !confirmPassword) {
              setIsFormError(true);
              return;
            }
          
            // Clear form fields
            setFormData({
              name: "",
              telephoneNumber: "",
              email: "",
              storeName: "",
              password: "",
              confirmPassword: "",
            });
            setCaptchaValue('');
            setIsCheckboxError(false);
            setIsFormError(false); // Clear form error state
          }
          
          const handlelogin = () => {
            navigate('/login');
          }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"xl"} py={12} px={6} mt={4}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
           <img src="https://console.chatnshops.com/assets/img/chatnshops-logo2.png" alt="logo"/>
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
           Signup to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
          {isFormError && (
          <Alert status="error">
            <AlertIcon />
            Please fill all the fields.
          </Alert>
        )}
            <HStack>
              <Box>
                <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" value={formData.name} onChange={handleChange} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="telephoneNumber">
                  <FormLabel>Telephone Number</FormLabel>
                  <Input type="number" name="telephoneNumber" value={formData.telephoneNumber} onChange={handleChange} />
             </FormControl>
              </Box>
            </HStack>

            <HStack>
              <Box>
              <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="text" name="email" value={formData.email} onChange={handleChange} />
       </FormControl>
              </Box>
              <Box>
                <FormControl id="storeName">
                  <FormLabel>Store Name</FormLabel>
                  <Input type="text" name="storeName" value={formData.storeName} onChange={handleChange} />
                </FormControl>
              </Box>
            </HStack>
           
           
            
            <HStack>
              <Box>
              <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange}/>
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
              </Box>
              <Box>
              <FormControl id="confirmPassword" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowConfirmPassword(
                          showConfirmPassword => !showConfirmPassword
                        )
                      }
                    >
                      {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Box>
            </HStack>

            <HStack>
                <FormControl id="package" isRequired>
              <FormLabel>Package</FormLabel>
              <Select placeholder="Select package">
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </Select>
            </FormControl>
            </HStack>
            
            <HStack>
              <Box>
                <FormControl id="product" isRequired>
                  <FormLabel>Type of Product Sold</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="quantity">
                  <FormLabel>Pieces delivered per day</FormLabel>
                  <Input type="number" />
                </FormControl>
              </Box>
            </HStack>

            <HStack>
      <FormControl id="captcha" isRequired>
        <FormLabel>{`${num1} + ${num2} = ?`}</FormLabel>
        <Input type="number" value={captchaValue} onChange={(e) => setCaptchaValue(e.target.value)} />
      </FormControl>
    </HStack>
    <Checkbox
          colorScheme={isCheckboxError ? "red" : "blue"}
          isChecked={isAgreed}
          onChange={(e) => setIsAgreed(e.target.checked)}
        >
          I Agree With <Link color={"blue.400"} href="https://console.chatnshops.com/home/terms_use">Terms And Conditions</Link>
        </Checkbox>

            <Stack spacing={10} pt={2}>
            <Button
                onClick={handleSignup}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500"
                }}
              >
                Sign up
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
                Already a user? <Link color={"blue.400"} href="/login">Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
