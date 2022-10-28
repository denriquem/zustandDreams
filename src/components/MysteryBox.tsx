import { Box, Text } from "@chakra-ui/react";

interface MysteryBoxProps {
  message: string | undefined;
}

const MysteryBox = ({ message }: MysteryBoxProps) => {
  return (
    <Box
      borderWidth={4}
      borderColor="blue.400"
      p={4}
      w="20%"
      h="30%"
      m="auto"
      borderRadius="xl"
    >
      <Text size="xs" color="blue.400">
        {message}
      </Text>
    </Box>
  );
};

export default MysteryBox;
