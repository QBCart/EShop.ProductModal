import React, {
  FC
} from 'https://cdn.skypack.dev/pin/react@v17.0.1-tOtrZxBRexARODgO0jli/min/react.js';

interface Props {
  companyStorageUrl: string;
};

const AddToCartToast: FC<Props> = (props) => {
  return (
    <div
      aria-live="assertive"
      aria-atomic="true"
      style={{ position: 'fixed', top: '50%', right: '50%' }}
    >
      <div
        className="toast  d-flex align-items-center"
        data-delay="8000"
        style={{ position: 'relative', bottom: '50%', left: '50%' }}
      >
        <div className="toast-body">
          <img src={`${props.companyStorageUrl}images/favicon.ico`} alt="company logo" width="18"></img>
          <strong className="ml-1 mr-auto">Item has been added to your cart!</strong>
        </div>
        <button
          type="button"
          className="ml-2 mb-1 mr-2 close"
          data-dismiss="toast"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};

export default AddToCartToast;
