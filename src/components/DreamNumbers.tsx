import React from "react";
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { useDreamStore } from "../store";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import DreamCount from "./DreamCount";

const DreamNumbers = () => {
  const { haveADream, loseADream } = useDreamStore((state: any) => state);

  return (
    <Flex
      w="40%"
      h="30%"
      m="auto"
      border={4}
      borderRadius="md"
      borderColor="white"
      justifyContent="center"
      gap={4}
    >
      <Text color="white" fontSize="xl">
        Dream Counter:
      </Text>
      <DreamCount />
      <IconButton
        aria-label="Add a dream"
        icon={<AddIcon />}
        onClick={haveADream}
      />
      <IconButton
        aria-label="Add a dream"
        icon={<MinusIcon />}
        onClick={loseADream}
      />
    </Flex>
  );
};

export default DreamNumbers;
