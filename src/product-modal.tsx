import React, {
  FC,
  useState,
  useEffect
} from 'https://cdn.skypack.dev/pin/react@v17.0.1-tOtrZxBRexARODgO0jli/min/react.js';

import AddToCartToast from './components/addToCartToast';
import InvalidInputModal from './components/InvalidInputModal';

import ProductModalItem from './product-modal-item';

import toUSCurrency from './currency';

interface Props {
  triggerId?: string;
  addToCart: any;
  companyStorageUrl: string;
}

const ProductModal: FC<Props> = (props) => {
  const triggerId: string =
    props?.triggerId && props.triggerId !== ''
      ? props.triggerId
      : 'productModal';

  const [item, setItem] = useState<ProductModalItem>(null);

  useEffect(() => {
    $(`#${triggerId}`).on('shown.bs.modal', function (e) {
      //@ts-ignore
      const triggerItem: ProductModalItem = $(e.relatedTarget).data('item');

      let newItem = { ...item };
      newItem.Href = triggerItem.Href;
      newItem.id = triggerItem.id;
      newItem.Name = triggerItem.Name;
      newItem.FullName = triggerItem.FullName;
      newItem.SalesPrice = triggerItem.SalesPrice;
      newItem.SalesDesc = triggerItem.SalesDesc;
      newItem.FullDesc = triggerItem.FullDesc;
      newItem.Images = triggerItem.Images;
      newItem.Specs = triggerItem.Specs;
      newItem.Quantity = 1;

      setItem(newItem);
    });
  }, []);

  const setQuantity = (e) => {
    setItem({ ...item, Quantity: e.target.value });
  };

  const submitToCart = () => {
    let quantityInt = Number(item.Quantity);
    if (
      typeof quantityInt === 'number' &&
      quantityInt % 1 === 0 &&
      quantityInt > 0
    ) {
      const newItem = { ...item };
      newItem.Quantity = quantityInt;
      props.addToCart(newItem);
      //@ts-ignore
      $(`#${triggerId}`).modal('hide');
      //@ts-ignore
      $('.toast').toast('show');
    } else {
      //@ts-ignore
      $(`#invalid-input`).modal('show');
    }
  };

  return (
    <div>
      <div
        className="modal fade"
        id={triggerId}
        tabIndex={-1}
        aria-labelledby={`${triggerId}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable modal-xl modal-lg">
          {item ? (
            <div className="modal-content">
              <div className="modal-body" id="product-modal-body">
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-4">
                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide product-modal-carousel"
                        data-ride="carousel"
                        data-interval="false"
                      >
                        {item.Images && item.Images.length > 0 ? (
                          <ol className="carousel-indicators">
                            <li
                              data-target="#carouselExampleIndicators"
                              data-slide-to="0"
                              className="active"
                            ></li>
                            {item.Images.map((img, index) => {
                              return (
                                <li
                                  data-target="#carouselExampleIndicators"
                                  data-slide-to={index + 1}
                                ></li>
                              );
                            })}
                          </ol>
                        ) : null}
                        <div className="carousel-inner">
                          <div className="carousel-item active text-center">
                            <img
                              id="product-modal-img"
                              src={
                                item.Images
                                  ? `${props.companyStorageUrl}images/responsive/${item.id}`
                                  : null
                              }
                              alt="First slide"
                            />
                          </div>
                          {item.Images && item.Images.length > 0
                            ? item.Images.map((img) => {
                                return (
                                  <div className="carousel-item text-center">
                                    <img
                                      id="product-modal-img"
                                      src={`${props.companyStorageUrl}images/related/${item.id}/responsive/${img}`}
                                      alt={item.FullName}
                                    />
                                  </div>
                                );
                              })
                            : null}
                        </div>
                        <a
                          className="carousel-control-prev"
                          id="carousel-prev"
                          href="#carouselExampleIndicators"
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
                          href="#carouselExampleIndicators"
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
                      <div className="row add-space"></div>
                    </div>
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
                            href={item.Href}
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
                            <h3>Product ID: {item.Name}</h3>
                            <h4>Description: {item.SalesDesc}</h4>
                            <h4>Price: {toUSCurrency(item.SalesPrice)}</h4>
                            <h4>Details:</h4>
                            <p>{item.FullDesc}</p>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-specs"
                            role="tabpanel"
                            aria-labelledby="pills-specs-tab"
                          >
                            {item.Specs && item.Specs.length > 0 ? (
                              item.Specs.map((textline) => {
                                return <div>{textline}</div>;
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
              </div>
              <div className="modal-footer" id="product-modal-footer">
                <div className="col-6 d-flex justify-content-start">
                  <input
                    type="number"
                    step="1"
                    min="1"
                    onChange={setQuantity}
                    value={item.Quantity}
                    className="form-control-lg ml-2 mr-1"
                    id="product-modal-quantity-input"
                  ></input>
                  <button
                    onClick={() => {
                      submitToCart();
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
          ) : (
            <div className="modal-content">
              <div className="modal-body"></div>
            </div>
          )}
        </div>
      </div>
      <AddToCartToast companyStorageUrl={props.companyStorageUrl} />
      <InvalidInputModal />
    </div>
  );
};

export default ProductModal;
