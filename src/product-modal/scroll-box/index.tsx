/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React, { FC, useState } from 'react';

import { toUSCurrency } from '@qbcart/utils';

import ScrollBoxStyles from './style.js';

interface Props {
  item: any;
  price: any;
}

const ScrollBox: FC<Props> = (props: Props) => {
  const [boxDisplay, setBoxDisplay] = useState('overview');

  return (
    <ScrollBoxStyles>
      <div className="scroll-box-header">
        <div
          className={
            boxDisplay === 'overview'
              ? `header-tab-active`
              : `header-tab-inactive`
          }
          onClick={() => setBoxDisplay('overview')}
        >
          Overview
        </div>
        <div
          className={
            boxDisplay === 'specs' ? `header-tab-active` : `header-tab-inactive`
          }
          onClick={() => setBoxDisplay('specs')}
        >
          Specs
        </div>
        <a className="product-page-anchor" href={props.item?.Href}>
          <span className="anchor-text">Visit Page</span>
          <span className="material-icons">open_in_new</span>
        </a>
      </div>
      <div className="scroll-box-body">
        {boxDisplay === 'overview' ? (
          <div>
            <h3>Product ID: {props.item?.Name}</h3>
            <h4>Description: {props.item?.SalesDesc}</h4>
            <h4>Price: {toUSCurrency(props.price)}</h4>
            <h4>Details:</h4>
            <p>{props.item?.FullDesc}</p>
          </div>
        ) : (
          <div>
            {props.item?.Specs && props.item.Specs.length > 0 ? (
              props.item.Specs.map((textline, index) => {
                return (
                  <div key={`${props.item.id}-specs-textline-${index}`}>
                    {textline}
                  </div>
                );
              })
            ) : (
              <div>
                <h3>Sorry, we have no specs!</h3>
                <div>The specs for this item are not yet available.</div>
              </div>
            )}
          </div>
        )}
      </div>
    </ScrollBoxStyles>
  );
};

export default ScrollBox;
