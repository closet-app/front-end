import type { AppProps } from "next/app";
import Chakra from "../components/Chakra";
import Fonts from "../components/Fonts";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function Website({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Component {...pageProps} />
    </Chakra>
  );
}

export default Website;
