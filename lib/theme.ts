import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#ffffff", "#ffffff")(props),
    },
  }),
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};
const theme = extendTheme({ config, styles });
export default theme;
