import React from "react";
import { ListItem, Button, Flex } from "@chakra-ui/react";
import { useDescriptionStore } from "../store";

interface JournalEntryProps {
  id: string;
  description: string;
  author: string;
}

const JournalEntry = ({ id, description, author }: JournalEntryProps) => {
  const { removeEntry } = useDescriptionStore((state) => state);

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
      <Flex alignItems="center">
        {description}
        <Button
          color="red.200"
          variant="sm"
          onClick={() => removeEntry(id)}
          ml="auto"
          pr={4}
          _hover={{ color: "red.300" }}
        >
          delete
        </Button>
      </Flex>
    </ListItem>
  );
};

export default JournalEntry;
