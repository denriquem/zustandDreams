import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Description = () => {
  return (
    <Box pt={20} w="40%" h="30%" m="auto">
      <Text color="white" fontSize="lg" p={10} fontWeight="bold">
        The first and hopefully last zustand fuelled interactive dream journal.
      </Text>
    </Box>
  );
};

export default Description;
