'use client';

import Card from '@/components/Card';
import CreateOrUpdateUserModal from '@/components/CreateOrUpdateUserModal';
import {
  Box,
  Button,
  HStack,
  Table, Tbody, Td, Th, Thead, Tr, useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

const Users: React.FC = function () {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: createIsOpen,
    onOpen: createOnOpen,
    onClose: createOnClose,
  } = useDisclosure();

  return (
    <Card
      title="Usuários"
      action={(
        <Button
          colorScheme="blue"
          onClick={createOnOpen}
        >
          Cadastrar Usuário
        </Button>
      )}
    >
      <Box maxW="100%" overflow="auto">
        <Table>
          <Thead>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th>CPF</Th>
            <Th>Cargo</Th>
            <Th>Ações</Th>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Antony Leme</Td>
              <Td>antony@puc.com.br</Td>
              <Td>14827229686</Td>
              <Td>Estoquista</Td>
              <Td>
                <HStack>
                  <Button
                    size="xs"
                    colorScheme="blue"
                    onClick={onOpen}
                  >
                    Editar
                  </Button>
                  <Button size="xs" colorScheme="red">Remover</Button>
                </HStack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <CreateOrUpdateUserModal
        isEdit
        isOpen={isOpen}
        onClose={onClose}
        submit={async () => undefined}
      />
      <CreateOrUpdateUserModal
        isOpen={createIsOpen}
        onClose={createOnClose}
        submit={async () => undefined}
      />
    </Card>
  );
};

export default Users;
