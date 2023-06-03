'use client';

import {
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { useRouter } from 'next/navigation';

const Products: React.FC = function () {
  const router = useRouter();
  router.push('/sales');

  return (
    <Box />
  );
};

export default Products;
