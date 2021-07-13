/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React from 'react';
import { render } from 'react-dom';

import ProductModal from './product-modal/index.js';

const globalMountsContainer = document.getElementById(
  'qbc-eshop-global-mounts'
)!;
const mountingDiv = document.createElement('div');
const companySettings = document.getElementById(
  'qbc-eshop-company-settings'
) as HTMLDivElement;

mountingDiv.id = 'qbc-eshop-product-modal';
globalMountsContainer.appendChild(mountingDiv);

render(
  <ProductModal
    imagesStorageUrl={companySettings.dataset.imagesStorageUrl!}
    userLoggedIn={Boolean(document.getElementById('qbc-eshop-user'))}
    bestSellersRibbonBGColor={
      companySettings.dataset.sliderBestSellersRibbonBGColor || 'green'
    }
    bestSellersRibbonTextColor={
      companySettings.dataset.sliderBestSellersRibbonTextColor || 'white'
    }
    featuredItemsRibbonBGColor={
      companySettings.dataset.sliderFeaturedItemsRibbonBGColor || 'blue'
    }
    featuredItemsRibbonTextColor={
      companySettings.dataset.sliderFeaturedItemsRibbonTextColor || 'white'
    }
    itemsOnSaleRibbonBGColor={
      companySettings.dataset.sliderItemsOnSaleRibbonBGColor || 'red'
    }
    itemsOnSaleRibbonTextColor={
      companySettings.dataset.sliderItemsOnSaleRibbonTextColor || 'white'
    }
  />,
  mountingDiv
);
