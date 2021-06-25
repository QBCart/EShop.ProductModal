/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React, { FC } from 'react';

import { toUSCurrency } from '@qbcart/utils';

import ScrollBoxStyles from './style.js';

interface Props {
  item: any;
  price: any;
}

const ScrollBox: FC<Props> = (props: Props) => {
  return (
    <ScrollBoxStyles>
      <ul
        className="nav-pill-scroll-box-header nav nav-pills mb-3"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="pills-overview-tab"
            data-toggle="pill"
            href="#pills-overview"
            role="tab"
            aria-controls="pills-overview"
            aria-selected="true"
          >
            Overview
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link .scroll-box-tabs"
            id="pills-specs-tab"
            data-toggle="pill"
            href="#pills-specs"
            role="tab"
            aria-controls="pills-specs"
            aria-selected="false"
          >
            Specs
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link .scroll-box-tabs"
            href={props.item?.Href}
            role="tab"
            aria-controls="pills-specs"
            aria-selected="false"
          >
            Visit Page
          </a>
        </li>
      </ul>
      <div className="nav-pill-scroll-box">
        <div className="tab-content" id="pills-tabContent">
          <div id="pills-overview">
            <h3>Product ID: {props.item?.Name}</h3>
            <h4>Description: {props.item?.SalesDesc}</h4>
            <h4>Price: {toUSCurrency(props.price)}</h4>
            <h4>Details:</h4>
            <p>{props.item?.FullDesc}</p>
          </div>
          <div id="pills-specs">
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
        </div>
      </div>
    </ScrollBoxStyles>
  );
};

export default ScrollBox;
