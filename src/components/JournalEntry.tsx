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
      border={4}
      borderColor="white"
      pl={10}
      bgColor="white"
      borderRadius="md"
      w="full"
      mt={4}
    >
      {description}
    </ListItem>
  );
};

export default JournalEntry;
