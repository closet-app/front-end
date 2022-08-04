import { Box, Container, Flex, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      backgroundColor={["red", "blue", "orange"]}
      justifyContent="space-evenly"
    >
      {/* <Container>  */}
      <Flex justifyContent="space-around" alignItems="center">
        <Box width="full">
          <Flex justifyContent="space-between">
            <Link>Mobile app</Link>
            <Link>Community</Link>
            <Link>Company</Link>
          </Flex>
        </Box>

        <Box backgroundColor="red">
          <Link>Closet Logo</Link>
          {/* when clicking logo it leads you back to home page/top? */}
        </Box>
        <Box>
          <Link>FAQ</Link>
          <Link>Blog</Link>
          <Link>Resources</Link>
        </Box>
      </Flex>
      {/* </Container> */}
    </Box>
  );
};

export default Footer;
