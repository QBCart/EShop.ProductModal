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
      // assumes SalesDesc is the best property for the item name/title
      newItem.SalesDesc = triggerItem.SalesDesc;
      // assumes there exists an in-depth product description... I chose 'FullDesc'
      newItem.FullDesc = triggerItem.FullDesc ?? triggerItem.SalesDesc;
      newItem.Specs = triggerItem.Specs;
      newItem.Quantity = 1;
      // images = [`https://qbcstoragemns4oocsxwl6w.z13.web.core.windows.net/images/responsive/${triggerItem.id}`];

      setItem(newItem);
    });
  }, []);

  const setQuantity = (e) => {
    if (e.target.value && parseInt(e.target.value) > 0) {
      setItem({ ...item, Quantity: parseInt(e.target.value) });
    }
  };

  let images: string[] = [`https://qbcstoragemns4oocsxwl6w.z13.web.core.windows.net/images/responsive/${item?.id}`, `https://qbcstoragemns4oocsxwl6w.z13.web.core.windows.net/images/responsive/${item?.id}`];


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
                            className="img-fluid"
                            src={images? images[0]: null}
                            alt="First slide"
                          />
                        </div>
                        {images && images.length > 1 ?
                          images.slice(1).map((img)=> {
                            return (
                              <div className="carousel-item">
                                <img
                                  className="img-fluid"
                                  src={img}
                                  alt={item.FullName}
                                />
                              </div>
                            )
                          }) : 
                          null
                        }
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
                    {/* <div>
                      <div>SKU: {item.Name}</div>
                      <div>Item Price: {item.SalesPrice}</div>
                      <div>Item Quantity: {item.Quantity} </div>
                    </div> */}
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link active"
                          id="pills-description-tab"
                          data-toggle="pill"
                          href="#pills-description"
                          role="tab"
                          aria-controls="pills-description"
                          aria-selected="true"
                        >
                          Description
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
                    <div className="scroll-box">
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-description"
                          role="tabpanel"
                          aria-labelledby="pills-description-tab"
                        >
                          Product Description - Lorem Ipsum is simply dummy text
                          of the printing and typesetting industry. Lorem Ipsum
                          has been the industry's standard dummy text ever since
                          the 1500s, when an unknown printer took a galley of
                          type and scrambled it to make a type specimen book. It
                          has survived not only five centuries, but also the
                          leap into electronic typesetting, remaining
                          essentially unchanged. It was popularised in the 1960s
                          with the release of Letraset sheets containing Lorem
                          Ipsum passages, and more recently with desktop
                          publishing software like Aldus PageMaker including
                          versions of Lorem Ipsum.
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-specs"
                          role="tabpanel"
                          aria-labelledby="pills-specs-tab"
                        >
                          Product Specs - It is a long established fact that a
                          reader will be distracted by the readable content of a
                          page when looking at its layout. The point of using
                          Lorem Ipsum is that it has a more-or-less normal
                          distribution of letters, as opposed to using 'Content
                          here, content here', making it look like readable
                          English. Many desktop publishing packages and web page
                          editors now use Lorem Ipsum as their default model
                          text, and a search for 'lorem ipsum' will uncover many
                          web sites still in their infancy. Various versions
                          have evolved over the years, sometimes by accident,
                          sometimes on purpose (injected humour and the like).
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
              
                  {/* <a
                    href={`${item.Href}`}
                    className="btn btn-secondary"
                    // data-toggle="tooltip"
                    // data-placement="bottom"
                    // title="Navigate to this Item's full Product Page"
                    data-dismiss="modal"
                  >
                    Visit Page
                  </a> */}
                
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
