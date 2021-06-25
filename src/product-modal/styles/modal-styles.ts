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

const ModalStyles = styled.div`
  --product-modal-show: ${ProductModalShow};
  --product-modal-hide: ${ProductModalHide};
  display: none;
  animation-duration: 0.5s;
  color: black;

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

export default ModalStyles;
