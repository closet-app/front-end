import type { AppProps } from "next/app";
import Chakra from "../components/Chakra";
import Fonts from "../components/Fonts";
import Layout from "../components/layouts";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function Website({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}

export default Website;
