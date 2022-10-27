import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      position="fixed"
      backgroundColor="black"
      fontWeight="bold"
      w="100%"
      color="white"
      h="10%"
      backdropFilter="saturate(180%) blur(5px)"
    >
      <Heading m="auto" fontSize="3xl">
        Zustand Dreams
      </Heading>
    </Flex>
  );
};

export default Header;
