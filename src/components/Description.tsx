import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Description = () => {
  return (
    <Box pt={20} w="40%" h="30%" m="auto">
      <Text
        color="white"
        fontSize="lg"
        py={10}
        pl={10}
        fontWeight="bold"
        textAlign="center"
      >
        The first and hopefully last zustand fuelled interactive dream journal.
      </Text>
    </Box>
  );
};

export default Description;
