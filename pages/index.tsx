import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/layouts/Article";
import useUserStore from "../store/user";

const Home: NextPage = () => {
  const verified = useUserStore((state) => state.verified);

  return (
    <Layout>
      <Box>I HAVE {verified ? "" : "NOT"} BEEN AUTHORIZED</Box>
      <Box backgroundColor="red">a</Box>
    </Layout>
  );
};

export default Home;
