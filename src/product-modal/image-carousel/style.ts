/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import styled from 'styled-components';

const ImageCarouselStyles = styled.div`
  --arrow-height: 40px;
  --carousel-width: calc((var(--product-modal-width) / 3) - 12px);
  --carousel-height: var(--carousel-width);
  position: relative;
  overflow: hidden;
  width: var(--carousel-width);
  height: var(--carousel-height);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .slide-image {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
  }

  .slide-image:hover {
    width: 100%;
    height: 100%;
    border: 1px solid lightgray;
  }
  .arrow {
    position: absolute;
    height: var(--arrow-height);
    width: 40px;
    font-size: 40px;
    top: calc(50% - (var(--arrow-height) / 2));
    color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    user-select: none;
  }
  .arrow:hover {
    color: black;
  }
  .left-arrow {
    left: 10px;
  }
  .right-arrow {
    right: 10px;
  }
  .slide-inactive {
    opacity: 0;
  }
  .slide-active {
    width: 100%;
    opacity: 1;
    animation: slide-fade 5s;
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
`;

export default ImageCarouselStyles;
