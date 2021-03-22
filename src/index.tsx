/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 * This code can only be used and/or distributed with express permission.
 */

import { React } from 'https://cdn.skypack.dev/@qbcart/eshop-skypack';
import { render } from 'https://cdn.skypack.dev/@qbcart/eshop-skypack';
import ProductModal from './product-modal';

const mountProductModal = (): void => {
  const id = 'qbc-eshop-product-modal';
  const mountingDiv = document.getElementById(id);

  render(
    <ProductModal
      id={id}
      imagesStorageUrl={mountingDiv.dataset.imagesStorageUrl}
    />,
    mountingDiv
  );
};

export default mountProductModal;
