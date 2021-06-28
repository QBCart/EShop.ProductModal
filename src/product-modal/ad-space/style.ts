/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import styled from 'styled-components';

const AdSpaceStyles = styled.div`
  --ad-space-width: calc(((var(--product-modal-width) / 3) - 10px));
  --ad-space-height: calc(((var(--modal-body-height) - 15px) / 2) - 10px);

  display: block;
  height: var(--ad-space-height);
  width: var(--ad-space-width);
  margin-top: 5px;
  background-color: lightgray;

  /* X-Large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
  }
  /* Small to medium devices (portrait phones, 576px and below) */
  @media (max-width: 575.98px) {
    display: none;
  }
`;

export default AdSpaceStyles;
