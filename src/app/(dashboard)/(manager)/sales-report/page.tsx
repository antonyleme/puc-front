'use client';

import Card from '@/components/Card';
import {
  Box,
  Button,
  HStack,
  Input,
  Table, Tbody, Td, Th, Thead, Tr,
} from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Sales: React.FC = function () {
  const sales = Array.from({ length: 10 }).map((_, index) => ({
    id: index,
    name: `Produto ${index + 1}`,
    seller: 'Antony Leme',
    date: moment().add(index, 'day').format('DD/MM/YYYY'),
    Valor: Math.random() * (100 - 10) + 10,
  }));

  return (
    <Card
      title="Histórico de Vendas"
      action={(
        <HStack>
          <Input type="date" mr="16px" />
          <Box>
            <Button colorScheme="blue">Gerar relatório</Button>
          </Box>
        </HStack>
      )}
    >
      <Box w="100%" h="300px" mb="32px">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={sales}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            {/* <YAxis /> */}
            <Tooltip
              labelFormatter={(value) => `Data: ${value}`}
              formatter={
                (value) => `R$${parseFloat(value.toString()).toFixed(2).replace('.', ',')}`
              }
            />
            <Legend />
            <Line
              dataKey="Valor"
              stroke="#005398"
              activeDot={{ r: 8 }}
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      <Box maxW="100%" overflow="auto">
        <Table>
          <Thead>
            <Th>Produto</Th>
            <Th>Vendedor</Th>
            <Th>Data</Th>
            <Th>Valor</Th>
          </Thead>
          <Tbody>
            {
              sales.map((sale) => (
                <Tr key={sale.id}>
                  <Td>{sale.name}</Td>
                  <Td>{sale.seller}</Td>
                  <Td>{sale.date}</Td>
                  <Td>
                    R$
                    {sale.Valor.toFixed(2).replace('.', ',')}
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
