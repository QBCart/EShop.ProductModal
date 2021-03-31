/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import styled from 'styled-components';

const StyledProductModalAdSpace = styled.div`
  display: block;
  width: auto;
  margin: 8px 0 0 0;
  background-color: lightgray;

  /* X-Large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    height: 300px;
  }
  /* Large devices (desktops, 992px to 1200px) */
  @media (min-width: 992px) and (max-width: 1199.98px) {
    height: 200px;
  }
  /* Small to medium devices (landscape phones, 992px and below) */
  @media (max-width: 991.98px) {
    display: none;
  }
`;

export default StyledProductModalAdSpace;
