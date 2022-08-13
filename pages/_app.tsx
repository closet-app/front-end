import type { AppProps } from "next/app";
import Chakra from "../components/Chakra";
// import Fonts from "../components/Fonts";
import Layout from "../components/layouts";
import { createClient, Provider } from "urql";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
});

function Website({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Chakra cookies={pageProps.cookies}>
        {/* <Fonts /> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Chakra>
    </Provider>
  );
}

export default Website;
