import { Flex, Text, IconButton } from "@chakra-ui/react";
import { useDreamStore } from "../store";
import { useEffect, useState } from "react";
import { AddIcon, MinusIcon, QuestionIcon } from "@chakra-ui/icons";
import DreamCount from "./DreamCount";
import MysteryBox from "./MysteryBox";

const DreamNumbers = () => {
  const [showMyteryBox, setShowMysteryBox] = useState(false);
  const [message, setMessage] = useState<string | undefined>("");
  const { haveADream, loseADream, lucidDream, randomQuotes } = useDreamStore(
    (state) => state
  );

  useEffect(() => {
    lucidDream();
  }, []);

  const handleMysteryClick = () => {
    setShowMysteryBox((showMyteryBox) => !showMyteryBox);
    setMessage(randomQuotes.pop());
    console.log(message);
  };

  return (
    <>
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
          _hover={{
            boxShadow: "0px 0px 0px 4px rgba(107, 70, 193)",
          }}
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
          _hover={{
            boxShadow: "0px 0px 0px 4px rgba(107, 70, 193)",
          }}
        />
        <IconButton
          onClick={() => handleMysteryClick()}
          size="sm"
          aria-label="Questions"
          icon={<QuestionIcon />}
          color="purple.500"
          bgColor="white"
          _hover={{
            boxShadow: "0px 0px 0px 4px rgba(107, 70, 193)",
          }}
        />
      </Flex>
      {showMyteryBox && <MysteryBox message={message} />}
    </>
  );
};

export default DreamNumbers;
