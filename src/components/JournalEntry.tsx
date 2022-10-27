import React from "react";
import { ListItem } from "@chakra-ui/react";

interface JournalEntryProps {
  id: string;
  description: string;
  author: string;
}

const JournalEntry = ({ id, description, author }: JournalEntryProps) => {
  return (
    <ListItem
      borderWidth={4}
      borderColor="orange.600"
      pl={10}
      bgColor="black"
      borderRadius="md"
      w="full"
      mt={4}
      py={4}
      color="white"
      fontWeight="bold"
    >
      {description}
    </ListItem>
  );
};

export default JournalEntry;
