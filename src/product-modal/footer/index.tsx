/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import type { ItemInventory } from '@qbcart/types';
import React, { FC, Dispatch, SetStateAction } from 'react';

import FooterStyles from './style.js';

interface Props {
  item?: ItemInventory;
  quantity: string;
  setQuantity: Dispatch<SetStateAction<string>>;
  submitToCart: (id: string, quantity: string) => Promise<void>;
  hideModal: () => void;
}

const ProductModal: FC<Props> = (props: Props) => {
  return (
    <FooterStyles>
      <div className="footer-left">
        <input
          className="quantity-input"
          type="number"
          step="1"
          min="1"
          onChange={(e) => props.setQuantity(e.target.value)}
          value={props.quantity}
        ></input>
        <button
          className="add-to-cart-button"
          onClick={() => {
            if (props.item?.id) {
              props.submitToCart(props.item.id, props.quantity);
            }
          }}
          type="button"
        >
          <span className="material-icons">add_shopping_cart</span>
        </button>
      </div>
      <div className="footer-right">
        <button
          className="close-button"
          type="button"
          onClick={props.hideModal}
        >
          <span className="material-icons">close</span>
        </button>
      </div>
    </FooterStyles>
  );
};

export default ProductModal;
