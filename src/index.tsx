/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 * This code can only be used and/or distributed with express permission.
 */

import { React } from './skypack';
import { render } from './skypack';
import ProductModal from './product-modal';

const mountProductModal = () => {
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
