/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import styled from 'styled-components';

const FooterStyles = styled.div`
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

export default FooterStyles;
