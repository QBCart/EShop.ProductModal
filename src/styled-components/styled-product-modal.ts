/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import styled from 'styled-components';

const StyledProductModal = styled.div`
  /*******************/
  /* CAROUSEL STYLES */
  /*******************/

  #carousel-next,
  #carousel-prev {
    filter: invert(100%);
  }

  .carousel-indicators li {
    background-color: #999;
    background-color: rgba(70, 70, 70, 0.25) !important;
  }

  .carousel-indicators .active {
    background-color: #444 !important;
  }

  .carousel-item {
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* X-Large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    .carousel .slide {
      height: 300px !important;
    }
    .carousel-item {
      height: 300px;
    }
  }
  /* Large devices (desktops, 992px to 1200px) */
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .carousel .slide {
      height: 200px !important;
    }
    .carousel-item {
      height: 200px;
    }
  }
  /* Small to medium devices (landscape phones, 992px and below) */
  @media (max-width: 991.98px) {
    .carousel .slide {
      height: 200px !important;
    }
    .carousel-item {
      height: 200px;
    }
  }

  /********************/
  /* SCROLLBOX STYLES */
  /********************/

  .nav-pill-scroll-box-header {
    border-bottom: 2px solid #007bff;
  }

  .nav-pills .nav-link {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  /* X-Large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    .nav-pill-scroll-box {
      overflow-y: auto;
      border: 1px solid lightgray;
      border-radius: 2px;
      padding: 12px;
      height: 550px;
    }
  }
  /* Large devices (desktops, 992px to 1200px) */
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .nav-pill-scroll-box {
      overflow-y: auto;
      border: 1px solid lightgray;
      border-radius: 2px;
      padding: 12px;
      height: 350px;
    }
  }
  /* Small to medium devices (landscape phones, 992px and below) */
  @media (max-width: 991.98px) {
    .nav-pill-scroll-box {
      overflow: visible;
      border: none;
      padding-bottom: 0;
    }
  }

  /*****************/
  /* FOOTER STYLES */
  /*****************/

  .modal-footer {
    flex-wrap: nowrap;
  }

  .form-control-lg {
    width: 110px;
  }

  /* Small to medium devices (landscape phones, 992px and below) */

  @media (max-width: 991.98px) {
    .modal-footer {
      padding: 10px;
    }
  }
`;

export default StyledProductModal;
