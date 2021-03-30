/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React from 'react';
import { render } from 'react-dom';
import ProductModal from './product-modal.js';

const mountProductModal = (
  showToast: (header: string, body: string, duration: number) => void,
  showAlertModal: (
    headerText: string,
    bodyHTML: string,
    headerTextColor?: string,
    headerBackgroundColor?: string,
    bodyTextColor?: string,
    bodyBackgroundColor?: string,
    iconName?: string,
    iconColor?: string
  ) => void
): void => {
  const id = 'qbc-eshop-product-modal';
  const mountingDiv = document.getElementById(id)!;

  render(
    <ProductModal
      id={id}
      imagesStorageUrl={mountingDiv.dataset.imagesStorageUrl!}
      showToast={showToast}
      showAlertModal={showAlertModal}
    />,
    mountingDiv
  );
};

export { mountProductModal };
