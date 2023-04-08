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
  Select,
} from '@chakra-ui/react';
import React from 'react';

interface Props {
  isOpen: boolean,
  onClose: () => void,
  submit: () => Promise<void>,
  isEdit?: boolean
}

const CreateOrUpdateUserModal: React.FC<Props> = function ({
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
              isEdit ? 'Editar Usuário'
                : 'Cadastrar Usuário'
            }
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb="16px">
              <FormLabel>Nome</FormLabel>
              <Input />
            </FormControl>
            <FormControl mb="16px">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl mb="16px">
              <FormLabel>CPF</FormLabel>
              <Input />
            </FormControl>
            <FormControl mb="16px">
              <FormLabel>Cargo</FormLabel>
              <Select>
                <option>Gestor</option>
                <option>Estoquista</option>
                <option>Vendedor</option>
              </Select>
            </FormControl>
            <FormControl mb="16px">
              <FormLabel>Senha</FormLabel>
              <Input type="password" />
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

export default CreateOrUpdateUserModal;
