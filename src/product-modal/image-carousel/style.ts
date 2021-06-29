/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import styled from 'styled-components';

const ImageCarouselStyles = styled.div`
  --arrow-height: calc((var(--product-modal-width) / 24));
  --carousel-width: calc((var(--product-modal-width) / 3));
  --carousel-height: calc(((var(--product-modal-height) - 75px) / 2) - 5px);

  width: var(--carousel-width);
  height: var(--carousel-height);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .slide-image {
    width: var(--carousel-height);
    height: var(--carousel-height);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  .arrow {
    position: absolute;
    height: var(--arrow-height);
    width: var(--arrow-height);
    font-size: var(--arrow-height);
    top: calc(50% - (var(--arrow-height) / 2));
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    user-select: none;
  }
  .arrow:hover {
    color: black;
  }
  .left-arrow {
    left: calc((var(--arrow-height) / 10));
  }
  .right-arrow {
    right: calc((var(--arrow-height) / 10));
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
    --carousel-width: calc((var(--product-modal-width)));
    --arrow-height: calc((var(--product-modal-width) / 15));
    .left-arrow {
      left: var(--arrow-height);
    }
    .right-arrow {
      right: var(--arrow-height);
    }
  }
`;

export default ImageCarouselStyles;
