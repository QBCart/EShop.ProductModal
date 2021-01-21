import React, {FC} from 'react'
import { render } from "react-dom";

import ProductModal from '../src'

interface Props {
};

const TestComponent: FC<Props> = (props) => {

    const addToCart = (item) => {
        console.log(item.Name)
    }

  return (
      <div>
          <ProductModal triggerId={'helloWorld'} addToCart={addToCart} />
      </div>
  );
};

render(<TestComponent />, document.getElementById('cart'));
