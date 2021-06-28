/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import styled from 'styled-components';

const ImageCarouselStyles = styled.div`
  --carousel-width: calc((var(--product-modal-width) / 3));
  --carousel-height: calc(((var(--modal-body-height) -15px) / 2) - 5px);
  --arrow-height: calc(var(--carousel-height) / 6);
  position: relative;
  overflow: hidden;
  width: var(--carousel-width);
  height: var(--carousel-height);
  display: flex;
  justify-content: center;
  align-items: center;

  .slide-image {
    width: var(--carousel-height);
    height: var(--carousel-height);
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
    left: calc(var(--arrow-height) / 8);
  }
  .right-arrow {
    right: calc(var(--arrow-height) / 8);
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
    --carousel-width: calc(var(--product-modal-width) - 100px);
    --carousel-height: calc(var(--carousel-width));
    --arrow-height: calc(var(--carousel-height) / 10);
  }
`;

export default ImageCarouselStyles;
