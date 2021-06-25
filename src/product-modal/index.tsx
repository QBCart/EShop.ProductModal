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
import { toUSCurrency } from '@qbcart/utils';

import ModalBodyStyles from './styles/modal-body-styles.js';
import ModalStyles from './styles/modal-styles.js';
import AdSpaceStyles from './styles/ad-space-styles.js';

interface Props {
  namespace: string;
  imagesStorageUrl: string;
  userLoggedIn: boolean;
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

  const price = customPrice ?? item?.SalesPrice ?? 0;

  useEffect(() => {
    changeItem(itemId);
    changeCustomPrice(itemId);
    setQuantity('1');
  }, [itemId, changeCustomPrice, changeItem, props.namespace]);

  useEffect(() => {
    if (itemId) {
      const modal = ref.current!;
      modal.style.animationName = 'var(--product-modal-show)';
      modal.style.display = 'block';
    }
  }, [itemId, ref]);

  /*
   *  Animation must be set when hiding modal to function properly.
   */
  const hideModal = () => {
    console.log('hide modal');
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
      //TODO: add modal hide animation sequence
      hideModal();
    }
  }

  return (
    <ModalStyles
      ref={ref}
      onAnimationEnd={() => onAnimationEnd()}
      id={`${props.namespace}-view`}
    >
      <ModalBodyStyles>
        <div>
          {/* begin Carousel Section */}
          <div
            id={`${props.namespace}-indicators`}
            className="carousel slide"
            data-ride="carousel"
            data-interval="false"
          >
            {item?.Images && item.Images.length > 0 ? (
              <ol className="carousel-indicators">
                <li
                  data-target={`#${props.namespace}-indicators`}
                  data-slide-to="0"
                  className="active"
                ></li>
                {item.Images.map((img, index) => {
                  return (
                    <li
                      key={`${item.id}-carousel-indicator-${index}`}
                      data-target={`#${props.namespace}-indicators`}
                      data-slide-to={index + 1}
                    ></li>
                  );
                })}
              </ol>
            ) : null}
            <div className="carousel-inner">
              <div
                className="carousel-item active"
                style={{
                  backgroundImage: item?.id
                    ? `url(${props.imagesStorageUrl}images/responsive/${item.id})`
                    : ''
                }}
              ></div>
              {item?.Images && item.Images.length > 0
                ? item.Images.map((img, index) => {
                    return (
                      <div
                        key={`${item.id}-carousel-img-${index}`}
                        className="carousel-item"
                        style={{
                          backgroundImage: `url(${props.imagesStorageUrl}images/related/${item.id}/responsive/${img})`
                        }}
                      ></div>
                    );
                  })
                : null}
            </div>
            <a
              className="carousel-control-prev"
              id="carousel-prev"
              href={`#${props.namespace}-indicators`}
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              id="carousel-prev"
              href={`#${props.namespace}-indicators`}
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          {/* begin Add Space Section */}
          <AdSpaceStyles></AdSpaceStyles>
        </div>
        {/* begin Scroll Box Section */}
        <div>
          <ul
            className="nav-pill-scroll-box-header nav nav-pills mb-3"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="pills-overview-tab"
                data-toggle="pill"
                href="#pills-overview"
                role="tab"
                aria-controls="pills-overview"
                aria-selected="true"
              >
                Overview
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link .scroll-box-tabs"
                id="pills-specs-tab"
                data-toggle="pill"
                href="#pills-specs"
                role="tab"
                aria-controls="pills-specs"
                aria-selected="false"
              >
                Specs
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link .scroll-box-tabs"
                href={item?.Href}
                role="tab"
                aria-controls="pills-specs"
                aria-selected="false"
              >
                Visit Page
              </a>
            </li>
          </ul>
          <div className="nav-pill-scroll-box">
            <div className="tab-content" id="pills-tabContent">
              <div id="pills-overview">
                <h3>Product ID: {item?.Name}</h3>
                <h4>Description: {item?.SalesDesc}</h4>
                <h4>Price: {toUSCurrency(price)}</h4>
                <h4>Details:</h4>
                <p>{item?.FullDesc}</p>
              </div>
              <div id="pills-specs">
                {item?.Specs && item.Specs.length > 0 ? (
                  item.Specs.map((textline, index) => {
                    return (
                      <div key={`${item.id}-specs-textline-${index}`}>
                        {textline}
                      </div>
                    );
                  })
                ) : (
                  <div>
                    <h3>Sorry, we have no specs!</h3>
                    <div>The specs for this item are not yet available.</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </ModalBodyStyles>
      {/* begin Footer Section */}
      <div className="modal-footer">
        <div>
          <input
            type="number"
            step="1"
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          ></input>
          <button
            onClick={() => {
              if (item?.id) {
                submitToCart(item.id, quantity);
              }
            }}
            type="button"
          >
            <span className="material-icons">add_shopping_cart</span>
          </button>
        </div>
        <div>
          <button type="button" onClick={hideModal}>
            <span className="material-icons">close</span>
          </button>
        </div>
      </div>
    </ModalStyles>
  );
};

export default ProductModal;
