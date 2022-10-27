import { Flex, Text, IconButton } from "@chakra-ui/react";
import { useDreamStore } from "../store";
import { AddIcon, MinusIcon, QuestionIcon } from "@chakra-ui/icons";
import DreamCount from "./DreamCount";

const DreamNumbers = () => {
  const { haveADream, loseADream, lucidDream, randomQuote } = useDreamStore(
    (state) => state
  );

  console.log(randomQuote);

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
      <Text color="white" fontSize="xl" fontWeight="bold">
        dream counter:
      </Text>
      <DreamCount />
      <IconButton
        size="sm"
        aria-label="Add a dream"
        icon={<AddIcon />}
        onClick={haveADream}
        bgColor="white"
      />
      <IconButton
        size="sm"
        aria-label="Add a dream"
        icon={<MinusIcon />}
        onClick={loseADream}
        bgColor="white"
      />
      <IconButton
        onClick={lucidDream}
        size="sm"
        aria-label="Questions"
        icon={<QuestionIcon />}
        color="purple.500"
        bgColor="white"
      />
    </Flex>
  );
};

export default DreamNumbers;
