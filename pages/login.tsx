import {
  Flex,
  Container,
  Heading,
  Button,
  Box,
  Link,
  Text,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import InputField from "../components/InputField";
import Layout from "../components/layouts/Article";
import NextLink from "next/link";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useLoginMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";

interface LoginProps {}

const Login: NextPage = ({}: LoginProps) => {
  const router = useRouter();
  const [, login] = useLoginMutation();

  return (
    <Layout title="Login" base={true}>
      <Flex height="full" justifyContent="center" alignItems="center">
        <Container maxW={{ base: "xs", sm: "sm", md: "lg" }}>
          <Box margin={["1rem", "2rem"]}>
            {/* put logo above or below heading */}
            <Heading as="h2" textAlign="center">
              Closet
            </Heading>
          </Box>
          <Box padding="2rem" boxShadow="dark-lg" rounded="xl">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={async (values, { setErrors }) => {
                const { data } = await login({ options: values });

                if (data?.login.errors) {
                  setErrors(toErrorMap(data.login.errors));
                } else if (data?.login.user) {
                  // worked
                  console.log(data.login);
                  localStorage.setItem("token", data.login.token as string);
                  router.push("/");
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Box mt={4}>
                    <Text mb={4} textAlign="center" fontSize="2xl">
                      Welcome Back
                    </Text>
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
                      Log in
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>

            <Flex
              mt={4}
              width="full"
              justifyContent="space-between"
              alignItems="center"
            >
              <NextLink href="/register" passHref>
                <Link color="#0088cc">Don't have an account?</Link>
              </NextLink>
              <NextLink href="/password-reset" passHref>
                <Link color="#0088cc">Forgot password?</Link>
              </NextLink>
            </Flex>
          </Box>
        </Container>
      </Flex>
    </Layout>
  );
};

export default Login;
