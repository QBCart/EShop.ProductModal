import React, {
  FC,
  useState,
  useEffect
} from 'https://cdn.skypack.dev/pin/react@v17.0.1-tOtrZxBRexARODgO0jli/min/react.js';

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
    <div className="modal" tabIndex={-1} id={triggerId}>
      <div className="modal-dialog modal-xl modal-lg">
        {item ? (
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{item.SalesDesc}</h5>
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
                  <div className="col-12 col-lg-6">
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-ride="carousel"
                      data-interval="false"
                    >
                      <ol className="carousel-indicators">
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="0"
                          className="active"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="1"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="2"
                        ></li>
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            className="d-block w-40"
                            src="https://i.imgur.com/I86rTVl.jpg"
                            alt="First slide"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="d-block w-40"
                            src="https://i.imgur.com/I86rTVl.jpg"
                            alt="Second slide"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="d-block w-40"
                            src="https://i.imgur.com/I86rTVl.jpg"
                            alt="Third slide"
                          />
                        </div>
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
                  <div className="col-12 col-lg-6">
                    <div>
                      <div>SKU: {item.Name}</div>
                      <div>Item Price: {item.SalesPrice}</div>
                      <div>Item Quantity: {item.Quantity} </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer flex-row d-flex justify-content-between">
                <div className="w-50 d-flex justify-content-start">
                              <label className="my-auto">QTY:</label>
                              <input
                                type="number"
                                min="1"
                                value={item.Quantity}
                                onChange={setQuantity}
                                className="w-25 ml-1"
                              ></input>
                              <button
                                onClick={() => {
                                  props.addToCart(item);
                                }}
                                type="button"
                                className="btn btn-success ml-1"
                                data-dismiss="modal"
                              >
                                Add To Cart
                              </button>
                    </div>
                    <div className="w-50 d-flex justify-content-end">
                    <a href={`${item.Href}`}
                      className="btn btn-secondary"
                      // data-toggle="tooltip"
                      // data-placement="bottom" 
                      // title="Navigate to this Item's full Product Page"
                      data-dismiss="modal"
                    >
                      Visit Page
                    </a>
                    <button
                      type="button"
                      className="btn btn-secondary ml-1"
                      
                    >
                      Close
                    </button>
                    </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="modal-content"></div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
