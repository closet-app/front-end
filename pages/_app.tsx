import type { AppProps } from "next/app";
import Chakra from "../components/Chakra";
import Layout from "../components/layouts";
import Fonts from "../components/Fonts";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts/>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}

export default Website;
