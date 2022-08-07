import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return <Box>{children}</Box>;
};

export default Wrapper;
