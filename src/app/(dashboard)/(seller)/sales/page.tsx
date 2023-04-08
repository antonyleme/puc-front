'use client';

import Card from '@/components/Card';
import CreateSaleModal from '@/components/CreateSaleModal';
import {
  Box,
  Button,
  Table, Tbody, Td, Th, Thead, Tr, useDisclosure,
} from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';

const Sales: React.FC = function () {
  const sales = Array.from({ length: 5 }).map((_, index) => ({
    id: index,
    name: `Produto ${index + 1}`,
    seller: 'Antony Leme',
    date: moment().add(index, 'day').format('DD/MM/YYYY'),
    Valor: Math.random() * (100 - 10) + 10,
  }));

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card
      title="Vendas"
      action={(
        <Button colorScheme="blue" onClick={onOpen}>Cadastrar venda</Button>
      )}
    >
      <CreateSaleModal
        isOpen={isOpen}
        onClose={onClose}
        submit={async () => undefined}
      />
      <Box maxW="100%" overflow="auto">
        <Table>
          <Thead>
            <Th>Produto</Th>
            <Th>Data</Th>
            <Th>Valor</Th>
            <Th>Ações</Th>
          </Thead>
          <Tbody>
            {
              sales.map((sale) => (
                <Tr key={sale.id}>
                  <Td>{sale.name}</Td>
                  <Td>{sale.date}</Td>
                  <Td>
                    R$
                    {sale.Valor.toFixed(2).replace('.', ',')}
                  </Td>
                  <Td>
                    <Button size="xs" colorScheme="red">Remover</Button>
                  </Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </Box>
    </Card>
  );
};

export default Sales;
