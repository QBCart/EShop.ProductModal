/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import styled, { keyframes } from 'styled-components';

const ProductModalShow = keyframes`
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
 `;

const ProductModalHide = keyframes`
   from {
      opacity: 1;
   }
   to {
      opacity: 0;
   }
 `;

const ProductModalStyles = styled.div`
  --product-modal-show: ${ProductModalShow};
  --product-modal-hide: ${ProductModalHide};
  --product-modal-width: calc(100vw - 300px);
  --product-modal-height: calc(var(--product-modal-width) * 0.7);
  display: none;
  animation-duration: 0.5s;
  color: black;

  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: var(--product-modal-width);
    height: var(--product-modal-height);
    border: 2px solid black;
    border-radius: 4px;
    background-color: white;
  }

  .modal-body {
    display: flex;
    height: calc(var(--product-modal-height) - 60px);
  }

  .modal-body-left {
    width: calc(var(--product-modal-width) / 3);
    padding: 10px;
  }

  /* Large devices (desktops, 1200px and up) */
  @media (min-width: 1200px) {
    --product-modal-width: 900px;
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    .modal-body {
      overflow: visible;
      overflow-y: hidden;
    }
  }

  /* Small to medium devices (landscape phones, 992px and below) */
  @media (max-width: 991.98px) {
    --product-modal-width: calc(100vw - 50px);
    .modal-body {
      overflow: visible;
      overflow-y: auto;
    }
  }

  /* Small to medium devices (landscape phones, 576px and below) */
  @media (max-width: 575.98px) {
    --product-modal-width: calc(100vw - 10px);
  }
`;

export default ProductModalStyles;
