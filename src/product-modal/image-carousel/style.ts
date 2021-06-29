/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import styled from 'styled-components';

const ImageCarouselStyles = styled.div`
  width: calc((var(--product-modal-width) / 3));
  height: calc(((var(--modal-body-height) -15px) / 2) - 5px);
  --arrow-height: calc((var(--product-modal-width) / 18));
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .slide-image {
    width: calc((var(--product-modal-width) / 3));
    height: calc((var(--product-modal-width) / 3));
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .arrow {
    position: absolute;
    height: calc((var(--product-modal-width) / 24));
    width: calc((var(--product-modal-width) / 24));
    font-size: calc((var(--product-modal-width) / 24));
    top: calc(50% - (var(--product-modal-width) / 48));
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    user-select: none;
  }
  .arrow:hover {
    color: black;
  }
  .left-arrow {
    left: calc((var(--product-modal-width) / 180));
  }
  .right-arrow {
    right: calc((var(--product-modal-width) / 180));
  }
  .slide-inactive {
    opacity: 0;
  }
  .slide-active {
    width: 100%;
    opacity: 1;
    display: flex;
    justify-content: center;
  }

  /* Small to medium devices (portrait phones, 576px and below) */
  @media (max-width: 575.98px) {
    width: calc(var(--product-modal-width) - 100px);
    height: calc(var(--carousel-width));
    .arrow {
      height: calc((var(--product-modal-width) / 15));
      width: calc((var(--product-modal-width) / 15));
      font-size: calc((var(--product-modal-width) / 15));
      top: calc(50% - (var(--product-modal-width) / 30));
    }

    .slide-image {
      width: calc((var(--product-modal-width) - 100px));
      height: calc((var(--product-modal-width) - 100px));
    }
  }
`;

export default ImageCarouselStyles;
