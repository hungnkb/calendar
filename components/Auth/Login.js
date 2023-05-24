import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Link,
  Button,
  Heading,
  Stack,
  Flex,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

function Login(props) {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box p={8}>
          <Stack spacing={4}>
            <Stack align={"center"}>
              <Heading style={{ paddingBottom: "20px" }} fontSize={"4xl"}>
                Sign in
              </Heading>
            </Stack>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"center"}
              >
                <Link color={"blue.400"}>Forgot password?</Link>
                {/* <Link color={"blue.400"} onClick={() => props.setIsOpenForm(2)}>
              Don't have account?
            </Link> */}
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Login;
