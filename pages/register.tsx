import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
  Container,
  Flex,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import Layout from "../components/layouts/Article";

const Register = () => {
  return (
    <Layout title="Register" base={true}>
      <Flex height="full" justifyContent="center" alignItems="center">
        <Container maxW="container.sm">
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => {
              console.log({ values });
            }}
          >
            {({ values, handleChange }) => (
              <Form>
                <FormControl>
                  <FormLabel>First name</FormLabel>
                  <Input
                    value={values.username}
                    onChange={handleChange}
                    id="username"
                    placeholder="name"
                  />
                  {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
                </FormControl>
              </Form>
            )}
          </Formik>
        </Container>
      </Flex>
    </Layout>
  );
};

export default Register;
