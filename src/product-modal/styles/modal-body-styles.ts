/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import styled from 'styled-components';

const ModalBodyStyles = styled.div`
  /* X-Large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    overflow: visible;
    overflow-y: hidden;
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) and (max-width: 1199.98px) {
    overflow: visible;
    overflow-y: hidden;
  }

  /* Small to medium devices (landscape phones, 992px and below) */
  @media (max-width: 991.98px) {
    overflow: visible;
    overflow-y: auto;
  }
`;

export default ModalBodyStyles;
