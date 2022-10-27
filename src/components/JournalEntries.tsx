import { useState } from "react";
import { Box, UnorderedList, Heading, Button, Flex } from "@chakra-ui/react";
import { useDescriptionStore } from "../store";
import JournalEntry from "./JournalEntry";
import AddEntryModal from "./AddEntryModal";

const JournalEntries = () => {
  const [showModal, setShowModal] = useState(false);
  const { entries } = useDescriptionStore((state) => state);

  const entriesList = entries.map((entry) => {
    return (
      <JournalEntry
        id={entry.id}
        description={entry.description}
        author={entry.author}
      />
    );
  });

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
      {showModal && <AddEntryModal closeModal={() => setShowModal(false)} />}
      <Flex w="60%">
        <Heading color="white" size="sm" fontWeight="bold">
          journal entries
        </Heading>
        <Button
          variant="solid"
          colorScheme="cyan"
          _hover={{ bgColor: "cyan" }}
          ml="auto"
          size="sm"
          fontWeight="bold"
          onClick={() => setShowModal(true)}
        >
          Add an entry
        </Button>
      </Flex>
      <Box
        mt={5}
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        bgColor="black"
        h={40}
        w="full"
      >
        <UnorderedList m={0}>{entriesList}</UnorderedList>
      </Box>
    </Box>
  );
};

export default JournalEntries;
