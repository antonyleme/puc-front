import useFetch, { api } from '@/hooks/use-fetch';
import {
  ISale, ISaleItem, IUseFetch,
} from '@/types';
import { useToast } from '@chakra-ui/react';
import moment from 'moment';

interface IUseSales {
  sales: ISaleItem[] | undefined,
  createSale: (sales: ISale[]) => Promise<boolean>,
  removeSale: (id: string) => Promise<boolean>,
}

interface IFetch extends IUseFetch {
  data: ISaleItem[] | undefined,
}

const useSales = (): IUseSales => {
  const { data: sales, mutate }: IFetch = useFetch('/venda');
  const toast = useToast();

  const createSale = async (newSales: ISale[]): Promise<boolean> => {
    try {
      await api.post('/venda', {
        dataVenda: moment().toISOString(),
        formaPagamento: 1,
        vendedorId: newSales?.[0].user.id,
        produtos: newSales.map((sale) => ({
          produtoId: sale.product.id,
          quantidade: 1,
        })),
      });
      await mutate();
      toast({
        status: 'success',
        title: 'Vendedor criado com sucesso',
      });
      return true;
    } catch (error) {
      toast({
        status: 'error',
        title: 'Algo de errado aconteceu',
      });
      return false;
    }
  };

  const removeSale = async (id: string): Promise<boolean> => {
    try {
      await api.delete(`/venda/${id}`);
      await mutate();
      toast({
        status: 'success',
        title: 'Venda removida com sucesso',
      });
      return true;
    } catch (error) {
      toast({
        status: 'error',
        title: 'Algo de errado aconteceu',
      });
      return false;
    }
  };

  return {
    sales,
    createSale,
    removeSale,
  };
};

export default useSales;
