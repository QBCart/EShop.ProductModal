import React, {
  FC
} from 'https://cdn.skypack.dev/pin/react@v17.0.1-tOtrZxBRexARODgO0jli/min/react.js';
import { render } from 'https://cdn.skypack.dev/pin/react-dom@v17.0.1-DtIXT56q6U8PbgLMrBhE/min/react-dom.js';

import ProductModal from '../src/index';

interface Props {}

const TestComponent: FC<Props> = (props) => {
  const addToCart = (item) => {
    console.log(item);
  };

  return (
    <div>
      <ProductModal
        addToCart={addToCart}
        companyStorageUrl={
          'https://qbcstoragemns4oocsxwl6w.z13.web.core.windows.net/'
        }
      />
    </div>
  );
};

render(<TestComponent />, document.getElementById('cart'));
