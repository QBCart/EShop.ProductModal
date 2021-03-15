import * as React from './skypack';
import type { FC } from './skypack';

import ProductModal from '../src/index';
import type ProductModalItem from '../src/product-modal-item';

interface Props {
  imagesStorageUrl: string;
}

const AddToCartTest: FC<Props> = (props) => {
  const addToCart = async (item: ProductModalItem) => {
    try {
      // throw '';
      console.log('addToCart Succeeded!');
      console.log(item);
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
