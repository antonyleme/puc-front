'use client';

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

interface Props {
  isOpen: boolean,
  onClose: () => void,
  submit: () => Promise<void>,
  isEdit?: boolean
}

const CreateOrUpdateProductModal: React.FC<Props> = function ({
  isOpen,
  onClose,
  submit,
  isEdit,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form>
          <ModalHeader>
            {
              isEdit ? 'Editar Produto'
                : 'Cadastrar Produto'
            }
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb="16px">
              <FormLabel>Nome</FormLabel>
              <Input />
            </FormControl>
            <FormControl mb="16px">
              <FormLabel>Preço</FormLabel>
              <Input />
            </FormControl>
            <FormControl mb="16px">
              <FormLabel>Categoria</FormLabel>
              <Input />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr="8px">Cancelar</Button>
            <Button colorScheme="blue" onClick={submit}>Salvar</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default CreateOrUpdateProductModal;
