import { Box, Container, Flex, Button, Heading, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import InputField from "../components/InputField";
import Layout from "../components/layouts/Article";

const Register = () => {
  return (
    <Layout title="Register" base={true}>
      <Flex height="full" justifyContent="center" alignItems="center">
        <Container maxW={{ base: "xs", sm: "sm", md: "xl" }}>
          <Box margin={["1rem", "2rem"]}>
            {/* put logo above or below heading */}
            <Heading as="h2" textAlign="center">
              Welcome to Closet
            </Heading>
          </Box>
          <Box padding="2rem" boxShadow="dark-lg" rounded="xl">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              }}
              onSubmit={(values) => {
                console.log({ values });
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Text mb={4} textAlign="center" fontSize="2xl">
                    Sign up for a free account
                  </Text>
                  <Box
                    width="full"
                    display={{ md: "flex" }}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box>
                      <InputField name="firstName" label="First Name" />
                    </Box>
                    <Box>
                      <InputField name="lastName" label="First Name" />
                    </Box>
                  </Box>

                  <Box mt={4}>
                    <InputField name="email" label="Email" type="email" />
                  </Box>

                  <Box mt={4}>
                    <InputField
                      name="password"
                      label="Password"
                      type="password"
                    />
                  </Box>
                  <Box
                    width="full"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mt={4}
                  >
                    <Button
                      isLoading={isSubmitting}
                      type="submit"
                      colorScheme="telegram"
                      width="50%"
                    >
                      Register
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </Container>
      </Flex>
    </Layout>
  );
};

export default Register;
