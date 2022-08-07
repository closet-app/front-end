import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import Layout from "../components/layouts/Page";

const Register = () => {
  return (
    <Layout title="Register" base={true}>
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
    </Layout>
  );
};

export default Register;
