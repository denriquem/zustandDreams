import Header from "./components/Header";
import Description from "./components/Description";
import DreamNumbers from "./components/DreamNumbers";
import { Flex, Box } from "@chakra-ui/react";
import JournalEntries from "./components/JournalEntries";

const App = () => {
  return (
    <Box bgColor="black" h="100vh">
      <Header />
      <Flex flexDir="column" gap={5}>
        <Description />
        <DreamNumbers />
        <JournalEntries />
      </Flex>
    </Box>
  );
};

export default App;
