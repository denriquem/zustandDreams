import { useState } from "react";
import { Box, List, Heading, Button, Flex } from "@chakra-ui/react";
import { useDescriptionStore } from "../store";
import JournalEntry from "./JournalEntry";
import AddEntryModal from "./AddEntryModal";

const JournalEntries = () => {
  const [showModal, setShowModal] = useState(false);
  const { entries } = useDescriptionStore((state) => state);

  const entriesList = entries.map((entry) => {
    return (
      <JournalEntry
        key={entry.id}
        id={entry.id}
        description={entry.description}
      />
    );
  });

  return (
    <Box pl={10} w="40%" h="30%" mt={20} mr="auto" ml="auto">
      {showModal && <AddEntryModal closeModal={() => setShowModal(false)} />}
      <Flex w="100%" alignContent="center">
        <Heading color="white" size="md" fontWeight="bold">
          Journal entries
        </Heading>
        <Button
          variant="solid"
          colorScheme="orange"
          _hover={{ bgColor: "orange.300" }}
          size="sm"
          fontWeight="bold"
          ml="auto"
          onClick={() => setShowModal(true)}
          fontSize="sm"
        >
          Add entry
        </Button>
      </Flex>
      <Box mt={5} bgColor="black" h={40} w="full">
        <List m={0}>{entriesList}</List>
      </Box>
    </Box>
  );
};

export default JournalEntries;
