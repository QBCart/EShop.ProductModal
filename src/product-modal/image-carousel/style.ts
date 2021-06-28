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
    width: 40px;
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
  @keyframes slide-fade {
    0% {
      opacity: 0.5;
    }
    5% {
      opacity: 0.7;
    }
    7% {
      opacity: 0.8;
    }
    10% {
      opacity: 0.9;
    }
    12% {
      opacity: 0.95;
    }
    15% {
      opacity: 1;
    }
    85% {
      opacity: 1;
    }
    87% {
      opacity: 0.95;
    }
    90% {
      opacity: 0.9;
    }
    93% {
      opacity: 0.8;
    }
    95% {
      opacity: 0.7;
    }
    100% {
      opacity: 0.5;
    }
  }
  /* X-Large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }
  /* Large devices (desktops, 992px to 1200px) */
  @media (min-width: 992px) and (max-width: 1199.98px) {
  }
  /* Small to medium devices (landscape phones, 992px and below) */
  @media (max-width: 991.98px) {
  }
  /* Small to medium devices (portrait phones, 576px and below) */
  @media (max-width: 575.98px) {
    --carousel-width: calc(var(--product-modal-width) - 100px);
    --carousel-height: calc(var(--carousel-width));
    --arrow-height: calc(var(--carousel-height) / 10);
  }
`;

export default ImageCarouselStyles;
