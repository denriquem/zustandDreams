import { Box } from "@chakra-ui/react";
import { useDreamStore } from "../store";

const DreamCount = () => {
  const { dreams } = useDreamStore((state) => state);

  return (
    <Box fontWeight="bold" fontSize="xl" color="purple.300">
      {dreams}
    </Box>
  );
};

export default DreamCount;
