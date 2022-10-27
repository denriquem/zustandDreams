import { Box, Text, Heading } from "@chakra-ui/react";

const JournalEntries = () => {
  return (
    <Box
      pl={10}
      w="40%"
      h="30%"
      border={4}
      borderColor="white"
      mt={40}
      mr="auto"
      ml="auto"
    >
      <Heading color="white" size="sm" fontWeight="bold" m="auto">
        Journal Entries
      </Heading>
      <Box
        mt={5}
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        bgColor="white"
        h={20}
        w="full"
      >
        <Text color="purple.300">Text text text </Text>
      </Box>
    </Box>
  );
};

export default JournalEntries;
