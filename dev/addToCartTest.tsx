import * as React from './skypack';
import type { FC } from './skypack';
import { useLocalDB } from '@qbcart/eshop-local-db';

import ProductModal from '../src/index';
import type ProductModalItem from '../src/product-modal-item';

interface Props {
  imagesStorageUrl: string;
}

const AddToCartTest: FC<Props> = (props) => {
  const localDB = useLocalDB(true, 'http://localhost:8080', true);
  const addToCart = async (id: string, quantity: number) => {
    try {
      // throw '';
      console.log('addToCart Succeeded!');
      console.log(id);
      console.log(quantity);
      return true;
    } catch {
      console.log('addToCart Failed!');
      return false;
    }
  };

  return (
    <ProductModal
      addToCart={addToCart}
      imagesStorageUrl={props.imagesStorageUrl}
    />
  );
};

export default AddToCartTest;
