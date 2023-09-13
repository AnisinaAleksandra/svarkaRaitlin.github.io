import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ReactNode, useRef, useState } from "react";
import { sendNotification } from "../../../shared/utils/telegram";

interface IModalProps {
  isOpen: boolean;
  overlay: ReactNode;
  onClose: () => void;
}
export const ModalCall: React.FC<IModalProps> = ({
  isOpen,
  overlay,
  onClose,
}: IModalProps) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const res = e.target.value.replace(/[^А-Яа-я]/gi, "").trim();
    return setName(res);
  };
  const handleInputChangePhone = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);

  const senTelegrammMessage = (e: React.FormEvent) => {
    e.preventDefault();
    let textMessage = `Многоуважаемый Виталий,
      перезвоните ${name} ${phone}`;

    sendNotification(textMessage, "html");
    onClose();
  };
  const isErrorName = name !== "";
  const isErrorPhone = phone !== "";
  const isCorrectToSend = isErrorName && isErrorPhone;

  let colorScheme = isCorrectToSend ? "yellow" : "gray";
  return (
    <div>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        {overlay}
        <ModalContent>
          <ModalHeader>Заказать звонок</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Имя</FormLabel>
              <Input
                ref={initialRef}
                onChange={handleInputChangeName}
                type="text"
                value={name}
              />
              {!isErrorName ? (
                <FormHelperText>Введите Имя</FormHelperText>
              ) : (
                <FormErrorMessage>Имя обязательно</FormErrorMessage>
              )}
            </FormControl>

            <FormControl mt={4} isRequired>
              <FormLabel>Телефон</FormLabel>
              <Input onChange={handleInputChangePhone} type="number" />
              {!isErrorPhone ? (
                <FormHelperText>Введите номер телефона</FormHelperText>
              ) : (
                <FormErrorMessage>Номер обязателен</FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme={colorScheme}
              onClick={(e) => senTelegrammMessage(e)}
              mr={3}
              isDisabled={!isCorrectToSend}
            >
              Отправить
            </Button>
            <Button onClick={onClose}>Отмена</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
