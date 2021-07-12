/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React, { FC, useEffect, useState } from 'react';
import { useRemoveProductModal } from '@qbcart/eshop-inventory-hooks';
import { toUSCurrency } from '@qbcart/utils';
import type { ItemInventory } from '@qbcart/types';

import ScrollBoxStyles from './style.js';

interface Props {
  item: ItemInventory;
  price: number;
  userLoggedIn: boolean;
  bestSellersRibbonBGColor: string;
  bestSellersRibbonTextColor: string;
  featuredItemsRibbonBGColor: string;
  featuredItemsRibbonTextColor: string;
  itemsOnSaleRibbonBGColor: string;
  itemsOnSaleRibbonTextColor: string;
}

const ScrollBox: FC<Props> = (props: Props) => {
  const [boxDisplay, setBoxDisplay] = useState('overview');
  const removeProductModal = useRemoveProductModal();

  useEffect(() => {
    setBoxDisplay('overview');
  }, [props.item]);

  const showBanners =
    props.item?.IsFeatured ||
    props.item?.IsOnSale ||
    props.item?.BestSellerRank > 0;

  if (!props.item) {
    return null;
  }
  const navigate = async () => {
    if (props.item) {
      await removeProductModal(props.item.id);
      window.location.assign(props.item.Href);
    }
  };

  return (
    <ScrollBoxStyles>
      <div className="scroll-box-header">
        <div
          className={
            boxDisplay === 'overview'
              ? `header-tab-active`
              : `header-tab-inactive`
          }
          onClick={() => setBoxDisplay('overview')}
        >
          Overview
        </div>
        <div
          className={
            boxDisplay === 'specs' ? `header-tab-active` : `header-tab-inactive`
          }
          onClick={() => setBoxDisplay('specs')}
        >
          Specs
        </div>
        <a className="product-page-anchor" onClick={() => navigate()}>
          <span className="anchor-text">Visit Page</span>
          <span className="material-icons">open_in_new</span>
        </a>
      </div>
      <div className="scroll-box-body">
        {boxDisplay === 'overview' ? (
          <div>
            <h3>{props.item?.SalesDesc}</h3>
            <h4>Product SKU: {props.item?.Name}</h4>
            <div className="flex-row-space-between">
              <div className="price-container">
                <div
                  className={`retail-price ${props.price ? 'price-slash' : ''}`}
                >
                  {toUSCurrency(props.item.SalesPrice)}
                </div>
                {props.price ? (
                  <div className="product-price">
                    {toUSCurrency(props.price)}
                  </div>
                ) : null}
              </div>
              {showBanners ? (
                <div className="ribbon-container">
                  {props.item.BestSellerRank &&
                  props.item.BestSellerRank > 0 ? (
                    <div
                      className="ribbon"
                      style={{
                        backgroundColor: props.bestSellersRibbonBGColor
                      }}
                    >
                      <span
                        style={{
                          color: props.bestSellersRibbonTextColor
                        }}
                      >
                        Best Seller
                      </span>
                    </div>
                  ) : null}
                  {props.item.IsOnSale ? (
                    <div
                      className="ribbon"
                      style={{
                        backgroundColor: props.itemsOnSaleRibbonBGColor
                      }}
                    >
                      <span
                        style={{
                          color: props.itemsOnSaleRibbonTextColor
                        }}
                      >
                        On Sale
                      </span>
                    </div>
                  ) : null}

                  {props.item.IsFeatured ? (
                    <div
                      className="ribbon"
                      style={{
                        backgroundColor: props.featuredItemsRibbonBGColor
                      }}
                    >
                      <span
                        style={{
                          color: props.featuredItemsRibbonTextColor
                        }}
                      >
                        Featured
                      </span>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>

            <h4>Details:</h4>
            <p>{props.item?.FullDesc}</p>
          </div>
        ) : (
          <div>
            {props.item?.Specs && props.item.Specs.length > 0 ? (
              props.item.Specs.map((textline, index) => {
                return (
                  <div key={`${props.item?.id}-specs-textline-${index}`}>
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
        )}
      </div>
    </ScrollBoxStyles>
  );
};

export default ScrollBox;
