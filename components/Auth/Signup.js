// import React, { useState } from "react";
// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   HStack,
//   InputRightElement,
//   Stack,
//   Button,
//   Heading,
//   Text,
//   useColorModeValue,
//   Link,
// } from "@chakra-ui/react";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// import * as Yup from "yup";
// import { useFormik } from "formik";

// function Signup(props) {
//   const [showPassword, setShowPassword] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string()
//         .max(15, "Must be 15 characters or less")
//         .required("Required"),
//       lastName: Yup.string()
//         .max(20, "Must be 20 characters or less")
//         .required("Required"),
//       email: Yup.string().email("Invalid email address").required("Required"),
//       password: Yup.string()
//         .required("Required")
//         .matches(
//           /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
//           "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
//         ),
//     }),
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   return (
//     <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
//       <Stack align={"center"}>
//         <Heading fontSize={"4xl"} textAlign={"center"}>
//           Sign up
//         </Heading>
//         <Text fontSize={"lg"} color={"gray.600"}>
//           to enjoy all of our cool features ✌️
//         </Text>
//       </Stack>
//       <Box
//         rounded={"lg"}
//         bg={useColorModeValue("white", "gray.700")}
//         boxShadow={"lg"}
//         p={8}
//       >
//         <Stack spacing={4}>
//           <form onSubmit={formik.handleSubmit}>
//             <HStack>
//               <Box>
//                 <FormControl id="firstName" isRequired>
//                   <FormLabel>First Name</FormLabel>
//                   <Input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.firstName}
//                   />
//                   {formik.touched.firstName && formik.errors.firstName ? (
//                     <div>{formik.errors.firstName}</div>
//                   ) : null}
//                 </FormControl>
//               </Box>
//               <Box>
//                 <FormControl id="lastName">
//                   <FormLabel>Last Name</FormLabel>
//                   <Input
//                     id="lastName"
//                     name="lastName"
//                     type="text"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.lastName}
//                   />
//                   {formik.touched.lastName && formik.errors.lastName ? (
//                     <div>{formik.errors.lastName}</div>
//                   ) : null}
//                 </FormControl>
//               </Box>
//             </HStack>
//             <FormControl id="email" isRequired>
//               <FormLabel>Email address</FormLabel>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.email}
//               />
//               {formik.touched.email && formik.errors.email ? (
//                 <div>{formik.errors.email}</div>
//               ) : null}
//             </FormControl>
//             <FormControl id="password" isRequired>
//               <FormLabel>Password</FormLabel>
//               <InputGroup>
//                 <Input
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   name="password"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.password}
//                 />
//                   {formik.touched.password && formik.errors.password ? (
//                 <div>{formik.errors.password}</div>
//               ) : null}
//                 <InputRightElement h={"full"}>
//                   <Button
//                     variant={"ghost"}
//                     onClick={() =>
//                       setShowPassword((showPassword) => !showPassword)
//                     }
//                   >
//                     {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                   </Button>
//                 </InputRightElement>
//               </InputGroup>
//             </FormControl>
//             <Stack spacing={10} pt={2}>
//               <Button
//                 loadingText="Submitting"
//                 size="lg"
//                 bg={"blue.400"}
//                 color={"white"}
//                 _hover={{
//                   bg: "blue.500",
//                 }}
//               >
//                 Sign up
//               </Button>
//             </Stack>
//           </form>
//           <Stack pt={6}>
//             <Text align={"center"}>
//               Already a user?{" "}
//               <Link onClick={() => props.setIsOpenForm(1)} color={"blue.400"}>
//                 Login
//               </Link>
//             </Text>
//           </Stack>
//         </Stack>
//       </Box>
//     </Stack>
//   );
// }

// export default Signup;
