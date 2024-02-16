import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";

function App() {
  const registerUser = () => {
    alert(formik.values.password)
    // alert("submit form");
  };
  const formik = useFormik({
    initialValues: {
      // isi dari initialvalues harus sama dengan name
      username: "",
      email: "",
      password: "",
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      // required() bole bole tidak dipakai sesuai kebutuhan 
      // isi validationscema harsu sama dengan initialvalue
      username: yup.string().required().min(3).max(10),
      email: yup.string().required().email(),
      password: yup
        .string()
        .required()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    }),
  });

  const handleform = (event) => {
    formik.setFieldValue(event.target.name, event.target.value);
  };
  return (
    <Container py="10">
      <Heading>Example Form</Heading>
      <Box padding="4" border="1px solid lightgray" borderRadius="4px" mt="8">
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing="3">
            <FormControl isInvalid={formik.errors.username}>
              <FormLabel>Username</FormLabel>
              <Input
                onChange={handleform}
                id="username"
                name="username"
                type="text"
              />
              <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                onChange={handleform}
                type=" email"
                id="email"
                name="email"
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                onChange={handleform}
                type="password"
                id="password"
                name="password"
              />
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="teal">
              Register Account
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}

export default App;
