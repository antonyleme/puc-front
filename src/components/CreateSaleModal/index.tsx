'use client';

import { IProduct } from '@/types';
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
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
  Th,
  Thead,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

interface Props {
  isOpen: boolean,
  onClose: () => void,
  submit: () => Promise<void>,
}

const CreateSaleModal: React.FC<Props> = function ({
  isOpen,
  onClose,
  submit,
}) {
  const products: IProduct[] = [
    // {
    //   name: 'Produto 1',
    //   value: 10,
    //   id: '1',
    //   category: 'Categoria 1',
    // },
    // {
    //   name: 'Produto 2',
    //   value: 20,
    //   id: '2',
    //   category: 'Categoria 2',
    // },
    // {
    //   name: 'Produto 3',
    //   value: 30,
    //   id: '3',
    //   category: 'Categoria 3',
    // },
  ];

  const [sales, setSales] = useState<IProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();

  const remove = (index: number): void => {
    setSales((old) => old.filter((sale, i) => i !== index));
  };

  const add = (): void => {
    if (!selectedProduct) return;

    setSales((old) => [...old, selectedProduct]);
  };

  useEffect(() => {
    setSelectedProduct(undefined);
    setSales([]);
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="700px">
        <form>
          <ModalHeader>
            Nova Venda
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb="32px">
              <FormLabel>Produto</FormLabel>
              <HStack>
                <Select
                  value={selectedProduct?.id}
                  onChange={
                    (e) => setSelectedProduct(
                      products.find((p) => p.id === e.target.value),
                    )
                  }
                >
                  <option>Selecione</option>
                  {/* {
                    products.map((product) => (
                      <option value={product.id}>
                        {product.name}
                        {' '}
                        -
                        {' R$'}
                        {product.value.toFixed(2).replace('.', ',')}
                      </option>
                    ))
                  } */}
                </Select>
                <Button
                  colorScheme="blue"
                  onClick={add}
                  isDisabled={!selectedProduct}
                >
                  Adicionar
                </Button>
              </HStack>
            </FormControl>

            <Table mb="32px">
              <Thead>
                <Th>Produto</Th>
                <Th>Preço</Th>
                <Th>Ações</Th>
              </Thead>
              <Tbody>
                {/* {
                  sales.map((sale, index) => (
                    <Tr key={sale.id}>
                      <Td>{sale.name}</Td>
                      <Td>
                        R$
                        {sale.value.toFixed(2).replace('.', ',')}
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
                } */}
              </Tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} mr="8px">Cancelar</Button>
            <Button colorScheme="blue" onClick={submit}>Finalizar Venda</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default CreateSaleModal;
