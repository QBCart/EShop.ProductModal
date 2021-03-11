import React, {
  FC
} from 'https://cdn.skypack.dev/pin/react@v17.0.1-tOtrZxBRexARODgO0jli/min/react.js';

interface Props {}

const InvalidInputModal: FC<Props> = (props) => {
  const closeModal = () => {
    $(`#qbc-eshop-product-modal-invalid-input`).modal('hide');
  };
  return (
    <div
      className="modal fade"
      data-backdrop="static"
      id="qbc-eshop-product-modal-invalid-input"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-start">
            <h5 className="modal-title" id="exampleModalLabel">
              <span className="material-icons">error_outline</span>
            </h5>
            <div className="invalid-title">Invalid Input</div>
          </div>
          <div className="modal-body invalid-modal-body">
            Quantity must be a positive whole number greater than zero.
          </div>
          <div className="modal-footer">
            <button
              onClick={closeModal}
              type="button"
              className="btn btn-secondary"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvalidInputModal;
