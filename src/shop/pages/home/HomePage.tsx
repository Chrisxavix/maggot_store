import { CustomJumbotron } from '../../components/CustomJumbotron';
import { CustomPagination } from '../../../components/custom/CustomPagination';
import { ProductsGrid } from '../../components/ProductsGrid';
import { products } from '@/mocks/products.mock';

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron title='Todos los productos' subTitle=''></CustomJumbotron>
      <ProductsGrid products={products}></ProductsGrid>
      <CustomPagination totalPages={5}></CustomPagination>
    </>
  )
}