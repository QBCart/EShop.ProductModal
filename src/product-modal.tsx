import React, {
  FC,
  useState,
  useEffect
} from 'https://cdn.skypack.dev/pin/react@v17.0.1-tOtrZxBRexARODgO0jli/min/react.js';

import ProductModalItem from './product-modal-item'

interface Props {
  triggerId?: string;
  addToCart: any;
}

const ProductModal: FC<Props> = (props) => {
  const triggerId: string =
    props?.triggerId && props.triggerId !== ''
      ? props.triggerId
      : 'productModal';

  const [item, setItem] = useState(null);

  useEffect(() => {
    $(`#${triggerId}`).on('shown.bs.modal', function (e) {
      //@ts-ignore
      const triggerItem = $(e.relatedTarget).data('item');

      let newItem = { ...item };
      newItem.Href = triggerItem.Href;
      newItem.id = triggerItem.id;
      newItem.Name = triggerItem.Name;
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
    if (e.target.value && parseInt(e.target.value) > 0) {
      setItem({ ...item, Quantity: parseInt(e.target.value) });
    }
  };

  return (
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
            <div className="modal-header">
              <h5 className="modal-title">{item.Name}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-ride="carousel"
                      data-interval="false"
                    >
                      {item.Images && item.Images.length > 1 ? (
                        <ol className="carousel-indicators">
                          <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            className="active"
                          ></li>
                          {item.Images.slice(1).map((img, index) => {
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
                            className="img-fluid"
                            src={item.Images ? item.Images[0] : null}
                            alt="First slide"
                          />
                        </div>
                        {item.Images && item.Images.length > 1
                          ? item.Images.slice(1).map((img) => {
                              return (
                                <div className="carousel-item text-center">
                                  <img
                                    className="img-fluid"
                                    src={img}
                                    alt={item.FullName}
                                  />
                                </div>
                              );
                            })
                          : null}
                      </div>
                      <a
                        className="carousel-control-prev"
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
                          className="nav-link"
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
                          className="nav-link"
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
                          <h3>{item.SalesDesc}</h3>
                          <h4>Price: {item.SalesPrice}</h4>
                          <h4>Details:</h4>
                          <p>{item.FullDesc}</p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-specs"
                          role="tabpanel"
                          aria-labelledby="pills-specs-tab"
                        >
                          {item.specs.map((textline) => {
                            return <div>{textline}</div>;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <input
                type="number"
                min="1"
                value={item.Quantity}
                onChange={setQuantity}
                className="quantity-input form-control-lg mr-1"
              ></input>
              <button
                onClick={() => {
                  props.addToCart(item);
                }}
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
              >
                <span className="material-icons">add_shopping_cart</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="modal-content">
            <div className="modal-body"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
