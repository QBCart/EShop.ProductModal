/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import styled from 'styled-components';

const ScrollBoxStyles = styled.div`
  --scroll-box-height: calc(var(--modal-body-height) - 5px);

  display: block;
  width: 100%;
  height: var(--scroll-box-height);
  padding-left: 5px;

  .scroll-box-header {
    display: flex;
    height: 40px;
    border-bottom: 2px solid rgb(0, 123, 255);
  }

  .header-tab-active {
    padding: 10px;
    background-color: rgb(0, 123, 255);
    color: white;
    text-decoration: none;
    margin-bottom: -2px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .header-tab-inactive {
    padding: 10px;
    color: grey;
    text-decoration: none;
    margin-bottom: -2px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .header-tab-active:hover {
    background-color: rgb(0, 173, 265);
    color: white;
  }

  .header-tab-inactive:hover {
    background-color: rgb(0, 173, 265);
    color: white;
  }

  .product-page-anchor {
    display: flex;
    padding: 10px;
    text-decoration: none;
    color: rgb(0, 123, 255);
  }

  .product-page-anchor:hover .anchor-text {
    text-decoration: underline;
  }

  .product-page-anchor .material-icons {
    font-size: 18px;
    margin: 0 3px;
  }

  .scroll-box-body {
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    padding: 12px;
    overflow: auto;
    height: calc(var(--scroll-box-height) - 48px);
  }

  /* Small to medium devices (portrait phones, 576px and below) */
  @media (max-width: 575.98px) {
    --scroll-box-height: unset;
  }

  width: calc(var(--product-modal-width) - 10px);
`;

export default ScrollBoxStyles;
