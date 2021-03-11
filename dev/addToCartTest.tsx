// React import is needed by snowpack even though typescript suggests otherwise
import React, {
  FC
} from 'https://cdn.skypack.dev/pin/react@v17.0.1-tOtrZxBRexARODgO0jli/min/react.js';

import ProductModal from '../src/index';
import ProductModalItem from '../src/product-modal-item';

interface Props {
  imagesStorageUrl: string;
}

const AddToCartTest: FC<Props> = (props) => {
  const addToCart = async (item: ProductModalItem) => {
    try {
      throw ''
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
