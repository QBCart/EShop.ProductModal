/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import styled from 'styled-components';

const FooterStyles = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 50px;
  border-top: 1px solid lightgray;
  padding: 10px;

  .footer-left {
    display: flex;
    align-items: center;
  }

  .quantity-input {
    width: 60px;
    height: 30px;
    padding: 5px;
  }

  .add-to-cart-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 40px;
    margin: 0 5px;
    color: white;
    background-color: rgb(49, 171, 69);
    border: none;
    border-radius: 2px;
  }

  .add-to-cart-button span {
    height: 22px;
    width: 22px;
    line-height: 22px;
  }

  .add-to-cart-button:hover {
    background-color: rgb(40, 138, 57);
    cursor: pointer;
  }

  .close-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 40px;
    color: white;
    background-color: rgb(108, 117, 125);
    border: none;
    border-radius: 2px;
  }

  .close-button:hover {
    background-color: rgb(83, 90, 95);
    cursor: pointer;
  }

  button span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 17px;
    width: 16px;
    text-align: center;
    line-height: 17px;
  }
`;

export default FooterStyles;
