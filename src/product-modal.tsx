/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React, { FC, useState, useEffect } from 'react';
import {
  useInventoryItem,
  useAddToCart,
  useCustomPrice
} from '@qbcart/eshop-local-db';

import { toUSCurrency, toWholeNumberGreaterThanZero } from '@qbcart/utils';

import StyledProductModalBody from './styled-components/styled-product-modal-body.js';
import StyledProductModal from './styled-components/styled-product-modal.js';
import StyledProductModalAdSpace from './styled-components/styled-product-modal-ad-space.js';

interface Props {
  id: string;
  imagesStorageUrl: string;
  showToast: (header: string, body: string, duration: number) => void;
}

const ProductModal: FC<Props> = (props: Props) => {
  const [item, changeItem] = useInventoryItem('');
  const [quantity, setQuantity] = useState('1');
  const [customPrice, changeCustomPrice] = useCustomPrice('');
  const addToCart = useAddToCart(true);

  const price = customPrice ?? item?.SalesPrice ?? 0;

  useEffect(() => {
    $(`#${props.id}-view`).on('show.bs.modal', function (e: JQueryEventObject) {
      const id = $(e.relatedTarget).data('id');
      changeItem(id);
      changeCustomPrice(id);
      setQuantity('1');
    });
  }, [changeCustomPrice, changeItem, props.id]);

  async function submitToCart(id: string, quantity: string) {
    const quantityInt = toWholeNumberGreaterThanZero(quantity);
    if (quantityInt) {
      const error = await addToCart(id, price, quantityInt);

      if (error) {
        // CALL ALERT MODAL AS FAILED TO ADD ITEM
        // $(`.invalid-title`).text('Failed to Add Item');
        // $(`.invalid-modal-body`).text(error);
        // $(`#qbc-eshop-product-modal-invalid-input`).modal('show');
      } else {
        $(`#${props.id}-view`).modal('hide');
        props.showToast(
          'Cart',
          '<h5 class="text-success">Item successfully added to cart</h5>',
          3.5
        );
      }
    } else {
      // CALL ALERT MODAL AS INVALID INPUT
      // previous material icon name used is 'error_outline'   could also use 'report', 'report_gmailerrorred', 'warning', or 'warning_amber'
      // $(`.invalid-title`).text('Invalid Input');
      // $(`.invalid-modal-body`).html(
      //   'Quantity must be a positive whole number greater than zero.'
      // );
      // $(`#qbc-eshop-product-modal-invalid-input`).modal('show');
    }
  }

  return (
    <StyledProductModal
      className="modal fade"
      id={`${props.id}-view`}
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable modal-xl modal-lg">
        <div className="modal-content">
          <StyledProductModalBody className="modal-body">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-4">
                  {/* begin Carousel Section */}
                  <div
                    id={`${props.id}-indicators`}
                    className="carousel slide"
                    data-ride="carousel"
                    data-interval="false"
                  >
                    {item?.Images && item.Images.length > 0 ? (
                      <ol className="carousel-indicators">
                        <li
                          data-target={`#${props.id}-indicators`}
                          data-slide-to="0"
                          className="active"
                        ></li>
                        {item.Images.map((img, index) => {
                          return (
                            <li
                              key={`${item.id}-carousel-indicator-${index}`}
                              data-target={`#${props.id}-indicators`}
                              data-slide-to={index + 1}
                            ></li>
                          );
                        })}
                      </ol>
                    ) : null}
                    <div className="carousel-inner">
                      <div
                        className="carousel-item active"
                        style={{
                          backgroundImage: item?.id
                            ? `url(${props.imagesStorageUrl}images/responsive/${item.id})`
                            : ''
                        }}
                      ></div>
                      {item?.Images && item.Images.length > 0
                        ? item.Images.map((img, index) => {
                            return (
                              <div
                                key={`${item.id}-carousel-img-${index}`}
                                className="carousel-item"
                                style={{
                                  backgroundImage: `url(${props.imagesStorageUrl}images/related/${item.id}/responsive/${img})`
                                }}
                              ></div>
                            );
                          })
                        : null}
                    </div>
                    <a
                      className="carousel-control-prev"
                      id="carousel-prev"
                      href={`#${props.id}-indicators`}
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      id="carousel-prev"
                      href={`#${props.id}-indicators`}
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                  {/* begin Add Space Section */}
                  <StyledProductModalAdSpace className="row"></StyledProductModalAdSpace>
                </div>
                {/* begin Scroll Box Section */}
                <div className="col-12 col-lg-8">
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
                        href={item?.Href}
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
                      <div
                        className="tab-pane fade show active"
                        id="pills-overview"
                        role="tabpanel"
                        aria-labelledby="pills-overview-tab"
                      >
                        <h3>Product ID: {item?.Name}</h3>
                        <h4>Description: {item?.SalesDesc}</h4>
                        <h4>Price: {toUSCurrency(price)}</h4>
                        <h4>Details:</h4>
                        <p>{item?.FullDesc}</p>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-specs"
                        role="tabpanel"
                        aria-labelledby="pills-specs-tab"
                      >
                        {item?.Specs && item.Specs.length > 0 ? (
                          item.Specs.map((textline, index) => {
                            return (
                              <div key={`${item.id}-specs-textline-${index}`}>
                                {textline}
                              </div>
                            );
                          })
                        ) : (
                          <div>
                            <h3>Sorry, we have no specs!</h3>
                            <div>
                              The specs for this item are not yet available.
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </StyledProductModalBody>
          {/* begin Footer Section */}
          <div className="modal-footer">
            <div className="col-6 d-flex justify-content-start">
              <input
                type="number"
                step="1"
                min="1"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                className="form-control-lg ml-2 mr-1"
              ></input>
              <button
                onClick={() => {
                  if (item?.id) {
                    submitToCart(item.id, quantity);
                  }
                }}
                type="button"
                className="btn btn-success"
              >
                <span className="material-icons">add_shopping_cart</span>
              </button>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledProductModal>
  );
};

export default ProductModal;
