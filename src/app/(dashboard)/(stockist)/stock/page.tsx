'use client';

import Card from '@/components/Card';
import CreateProductEntriesModal from '@/components/CreateProductEntriesModal';
import {
  Box,
  Button,
  Table, Tbody, Td, Th, Thead, Tr, useDisclosure,
} from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
import useProducts from '../../(manager)/products/(hooks)/use-products';

const Stock: React.FC = function () {
  const entries = Array.from({ length: 5 }).map((_, index) => ({
    id: index,
    name: `Produto ${index + 1}`,
    date: moment().add(index, 'day').format('DD/MM/YYYY'),
    qtd: 1,
  }));

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { products, updateStock } = useProducts();

  return (
    <Card
      title="Estoque"
      action={(
        <Button colorScheme="blue" onClick={onOpen}>Cadastrar entrada</Button>
      )}
    >
      <CreateProductEntriesModal
        isOpen={isOpen}
        onClose={onClose}
        submit={updateStock}
        products={products || []}
      />
      <Box maxW="100%" overflow="auto">
        <Table>
          <Thead>
            <Th>Produto</Th>
            <Th>Quantidade</Th>
            {/* <Th>Ações</Th> */}
          </Thead>
          <Tbody>
            {
              products?.map((product) => (
                <Tr key={product.id}>
                  <Td>{product.descricao}</Td>
                  <Td>
                    {product.estoque}
                  </Td>
                  {/* <Td>
                    <HStack>
                      <Button size="xs" colorScheme="red">Remover</Button>
                      <Button size="xs" colorScheme="blue">Editar</Button>
                    </HStack>
                  </Td> */}
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </Box>
    </Card>
  );
};

export default Stock;
