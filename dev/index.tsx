import * as React from './skypack';
import { render } from './skypack';

import AddToCartTest from './addToCartTest';

render(
  <AddToCartTest
    imagesStorageUrl={
      'https://qbcimages4e2rfby2glfmo.z13.web.core.windows.net/'
    }
  />,
  document.getElementById('cart')
);
