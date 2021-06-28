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
  }

  .add-to-cart-button {
    height: 30px;
    width: 40px;
    margin: 0 5px;
    color: white;
    background-color: rgba(49, 171, 69);
    border: none;
    border-radius: 2px;
  }

  .add-to-cart-button:hover {
    background-color: rgba(40, 160, 60);
  }

  .close-button {
    height: 30px;
    width: 40px;
    color: white;
    background-color: rgba(218, 40, 70);
    border: none;
    border-radius: 2px;
  }

  .close-button:hover {
    background-color: rgba(208, 30, 60);
  }

  /* Small to medium devices (landscape phones, 992px and below) */

  @media (max-width: 991.98px) {
    .modal-footer {
      padding: 10px;
    }
  }
`;

export default FooterStyles;
