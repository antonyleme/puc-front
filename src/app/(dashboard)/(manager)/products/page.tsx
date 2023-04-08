'use client';

import Card from '@/components/Card';
import CreateOrUpdateProductModal from '@/components/CreateOrUpdateProductModal';
import {
  Box,
  Button,
  HStack,
  Table, Tbody, Td, Th, Thead, Tr, useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

const Products: React.FC = function () {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: createIsOpen,
    onOpen: createOnOpen,
    onClose: createOnClose,
  } = useDisclosure();

  return (
    <Card
      title="Produtos"
      action={(
        <Button
          colorScheme="blue"
          onClick={createOnOpen}
        >
          Cadastrar Produto
        </Button>
      )}
    >
      <Box maxW="100%" overflow="auto">
        <Table>
          <Thead>
            <Th>Nome</Th>
            <Th>Preço</Th>
            <Th>Categoria</Th>
            <Th>Ações</Th>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Produto 1</Td>
              <Td>R$10,99</Td>
              <Td>Categoria 1</Td>
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

      <CreateOrUpdateProductModal
        isEdit
        isOpen={isOpen}
        onClose={onClose}
        submit={async () => undefined}
      />
      <CreateOrUpdateProductModal
        isOpen={createIsOpen}
        onClose={createOnClose}
        submit={async () => undefined}
      />
    </Card>
  );
};

export default Products;
