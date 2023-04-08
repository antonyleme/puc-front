/* eslint-disable react/no-array-index-key */

'use client';

import { IEntry, IProduct } from '@/types';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

interface Props {
  isOpen: boolean,
  onClose: () => void,
  submit: () => Promise<void>,
}

const CreateProductEntriesModal: React.FC<Props> = function ({
  isOpen,
  onClose,
  submit,
}) {
  const products: IProduct[] = [
    {
      name: 'Produto 1',
      value: 10,
      id: '1',
      category: 'Categoria 1',
    },
    {
      name: 'Produto 2',
      value: 20,
      id: '2',
      category: 'Categoria 2',
    },
    {
      name: 'Produto 3',
      value: 30,
      id: '3',
      category: 'Categoria 3',
    },
  ];

  const [entries, setEntries] = useState<IEntry[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();
  const [selectedQtd, setSelectedQtd] = useState('');

  const remove = (index: number): void => {
    setEntries((old) => old.filter((sale, i) => i !== index));
  };

  const add = (): void => {
    if (!selectedProduct) return;

    setEntries((old) => [...old, {
      name: selectedProduct.name,
      qtd: selectedQtd,
    }]);
    setSelectedQtd('');
  };

  useEffect(() => {
    setSelectedProduct(undefined);
    setEntries([]);
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="700px">
        <form>
          <ModalHeader>
            Novas Entradas
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid
              templateColumns={{ base: '1fr', lg: '3fr 1fr' }}
              gap="24px"
              mb="24px"
            >
              <FormControl>
                <FormLabel>Produto</FormLabel>
                <Select
                  value={selectedProduct?.id}
                  onChange={
                    (e) => setSelectedProduct(
                      products.find((p) => p.id === e.target.value),
                    )
                  }
                >
                  <option>Selecione</option>
                  {
                    products.map((product) => (
                      <option value={product.id}>
                        {product.name}
                        {' '}
                        -
                        {' R$'}
                        {product.value.toFixed(2).replace('.', ',')}
                      </option>
                    ))
                  }
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Quantidade</FormLabel>
                <Input
                  value={selectedQtd}
                  onChange={(e) => setSelectedQtd(e.target.value)}
                  type="number"
                />
              </FormControl>
            </Grid>

            <Flex justifyContent="flex-end" mb="32px">
              <Button
                colorScheme="blue"
                onClick={add}
                isDisabled={!selectedProduct || !selectedQtd}
              >
                Adicionar
              </Button>
            </Flex>

            <Table mb="32px">
              <Thead>
                <Th>Produto</Th>
                <Th>Quantidade</Th>
                <Th>Ações</Th>
              </Thead>
              <Tbody>
                {
                  entries.map((entry, index) => (
                    <Tr key={index}>
                      <Td>{entry.name}</Td>
                      <Td>
                        {entry.qtd}
                      </Td>
                      <Td>
                        <Button
                          colorScheme="red"
                          size="xs"
                          onClick={() => remove(index)}
                        >
                          Remover
                        </Button>
                      </Td>
                    </Tr>
                  ))
                }
              </Tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr="8px">Cancelar</Button>
            <Button colorScheme="blue" onClick={submit}>
              Cadastrar Entradas
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default CreateProductEntriesModal;
