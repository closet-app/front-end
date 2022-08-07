import { ReactNode } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { GridItemStyle } from "../GridItem";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  base?: boolean;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Layout = ({ children, title, base = false }: LayoutProps) => {
  const t = `${title} - Community Closet`;
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative" }}
    >
      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta name="twitter:title" content={t} />
            <meta property="og:title" content={t} />
          </Head>
        )}
        {!base && <NavBar />}
        <Box height="100vh">{children}</Box>
        {!base && <Footer />}
        <GridItemStyle />
      </>
    </motion.article>
  );
};

export default Layout;
