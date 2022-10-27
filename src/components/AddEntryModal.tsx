import { useState, ChangeEvent } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@chakra-ui/react";
import { useDescriptionStore } from "../store";

interface AddEntryModalProps {
  closeModal: () => void;
}

const AddEntryModal = ({ closeModal }: AddEntryModalProps) => {
  const [value, setValue] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  const { setNewEntry } = useDescriptionStore((state) => state);

  const addEntry = () => {
    setNewEntry(value, "Jim");
    closeModal();
  };

  return (
    <Modal isOpen onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Write your entry</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            value={value}
            onChange={handleChange}
            placeholder="What happened then?"
            size="md"
          />
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="cyan"
            mr={3}
            size="sm"
            variant="outline"
            onClick={closeModal}
          >
            Close
          </Button>
          <Button colorScheme="cyan" size="sm" onClick={addEntry}>
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddEntryModal;
