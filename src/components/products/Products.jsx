import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../redux/products/selectorProducts';
import { getAllProducts } from '../../redux/products/operations';

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsSelector);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  console.log(products);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products &&
          products.map(product => <li key={product._id}>{product.title}</li>)}
      </ul>
    </div>
  );
};
