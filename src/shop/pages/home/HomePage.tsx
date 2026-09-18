import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomJumbotron } from '@/shop/components/CustomJumbotron';
import { ProductsGrid } from '@/shop/components/ProductsGrid';
import { useProducts } from '@/shop/hooks/useProducts';

export const HomePage = () => {
  const { data } = useProducts();
  return (
    <>
      <CustomJumbotron title='Todos los productos' subTitle=''></CustomJumbotron>
      <ProductsGrid products={data?.products || []}></ProductsGrid>
      <CustomPagination totalPages={5}></CustomPagination>
    </>
  )
}