import { Box, Container } from "@chakra-ui/react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { ReactNode } from "react";
import Head from "next/head";
type Props = {
  router?: any;
  children: ReactNode;
};

const Main = ({ router, children }: Props) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Community Closet" />
        <meta name="author" content="Shariq Ali" />
        <meta name="author" content="Chriz Ramirez" />
        <meta property="og:site_name" content="Community Closet" />
        <meta name="og:title" content="Community Closet" />
        <title>Homepage - Community Closet </title>
      </Head>

      <NavBar />

      {children}

      <Footer />
    </Box>
  );
};

export default Main;
