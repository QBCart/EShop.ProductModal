/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 * This code can only be used and/or distributed with express permission.
 */

import { React } from 'https://cdn.skypack.dev/@qbcart/eshop-skypack';
import { render } from 'https://cdn.skypack.dev/@qbcart/eshop-skypack';
import ProductModal from './product-modal';

const mountProductModal = (
  showToast: (header: string, body: string, duration: number) => void
): void => {
  const id = 'qbc-eshop-product-modal';
  const mountingDiv = document.getElementById(id);

  render(
    <ProductModal
      id={id}
      imagesStorageUrl={mountingDiv.dataset.imagesStorageUrl}
      showToast={showToast}
    />,
    mountingDiv
  );
};

export default mountProductModal;
