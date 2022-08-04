import { Box, Container, Flex, Link } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box height="5vh" display="flex" alignItems="center" backgroundColor="grey">
      <Container>
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Link>Features</Link>
          </Box>
          <Box>Right nav links</Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default NavBar;
