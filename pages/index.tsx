import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/layouts/Article";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box>I HAVE BEEN AUTHORIZED</Box>
      <Box backgroundColor="red">a</Box>
    </Layout>
  );
};

export default Home;
