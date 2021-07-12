/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React, { FC, useState, useEffect, useRef } from 'react';
// prettier-ignore
import { useInventoryItem, useCustomPricing, useProductModal, useRemoveProductModal } from '@qbcart/eshop-inventory-hooks';
import { useAddToCart } from '@qbcart/eshop-cart-hooks';

import ProductModalStyles from './style.js';

import AdSpace from './ad-space/index.js';
import ImageCarousel from './image-carousel/index.js';
import ScrollBox from './scroll-box/index.js';
import Footer from './footer/index.js';

interface Props {
  imagesStorageUrl: string;
  userLoggedIn: boolean;
  bestSellersRibbonBGColor: string;
  bestSellersRibbonTextColor: string;
  featuredItemsRibbonBGColor: string;
  featuredItemsRibbonTextColor: string;
  itemsOnSaleRibbonBGColor: string;
  itemsOnSaleRibbonTextColor: string;
}

const ProductModal: FC<Props> = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const itemId = useProductModal();
  const removeProductModal = useRemoveProductModal();
  const addToCart = useAddToCart(props.userLoggedIn);
  const [item, changeItem] = useInventoryItem(itemId);
  const [quantity, setQuantity] = useState('1');
  const [customPrice, changeCustomPrice] = useCustomPricing(
    props.userLoggedIn,
    itemId
  );

  // const price = customPrice ?? item?.SalesPrice ?? 0;

  useEffect(() => {
    changeItem(itemId);
    changeCustomPrice(itemId);
    setQuantity('1');
  }, [itemId, changeCustomPrice, changeItem]);

  useEffect(() => {
    if (itemId) {
      const modal = ref.current!;
      modal.style.animationName = 'var(--product-modal-show)';
      modal.style.display = 'block';
    }
  }, [itemId, ref]);

  const price = item?.IsOnSale
    ? item?.OnSalePrice
      ? customPrice && customPrice < item?.OnSalePrice
        ? customPrice
        : item?.OnSalePrice
      : customPrice
    : customPrice;

  /*
   *  Animation must be set when hiding modal to function properly.
   */
  const hideModal = () => {
    const modal = ref.current!;
    modal.style.animationName = 'var(--product-modal-hide)';
  };

  const onAnimationEnd = async (): Promise<void> => {
    const modal = ref.current!;
    modal.style.animationName = '';

    if (modal.classList.contains('qbc-product-modal-visible')) {
      modal.classList.remove('qbc-product-modal-visible');
      modal.style.display = 'none';
      if (itemId) {
        removeProductModal(itemId);
      }
    } else {
      modal.classList.add('qbc-product-modal-visible');
    }
  };

  async function submitToCart(id: string, quantity: string) {
    if (await addToCart(id, price, quantity)) {
      hideModal();
    }
  }

  if (!itemId) {
    return null;
  }

  return (
    <ProductModalStyles ref={ref} onAnimationEnd={() => onAnimationEnd()}>
      <div className="modal-wrapper">
        <div className="modal-content">
          <div className="modal-header"></div>
          <div className="modal-body">
            <div className="modal-body-left">
              <ImageCarousel
                item={item}
                imagesStorageUrl={props.imagesStorageUrl}
              />
              <AdSpace></AdSpace>
            </div>
            <ScrollBox
              item={item}
              price={price}
              userLoggedIn={props.userLoggedIn}
              bestSellersRibbonBGColor={props.bestSellersRibbonBGColor}
              bestSellersRibbonTextColor={props.bestSellersRibbonTextColor}
              featuredItemsRibbonBGColor={props.featuredItemsRibbonBGColor}
              featuredItemsRibbonTextColor={props.featuredItemsRibbonTextColor}
              itemsOnSaleRibbonBGColor={props.itemsOnSaleRibbonBGColor}
              itemsOnSaleRibbonTextColor={props.itemsOnSaleRibbonTextColor}
            />
          </div>
          <Footer
            item={item}
            quantity={quantity}
            setQuantity={setQuantity}
            submitToCart={submitToCart}
            hideModal={hideModal}
          />
        </div>
      </div>
      <div className="modal-backdrop"></div>
    </ProductModalStyles>
  );
};

export default ProductModal;
