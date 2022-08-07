import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
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

      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;
