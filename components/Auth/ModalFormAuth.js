import React, { useEffect, useState } from "react";
// import Signup from "./Signup";
import Login from "./Login";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function ModalFormAuth(props) {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [isOpenForm, setIsOpenForm] = useState(1);

  useEffect(() => {
    if (isOpenForm == 0) {
      props.setOpenModalFormAuth[1](0);
    }
  }, [isOpenForm]);

  const handleClose = () => {
    onClose();
    setIsOpenForm(0);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {isOpenForm == 1 ? (
              <Login setIsOpenForm={setIsOpenForm} />
            ) 
            // : isOpenForm == 2 ? (
            //   <Signup setIsOpenForm={setIsOpenForm} />
            // ) 
            : null}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalFormAuth;
