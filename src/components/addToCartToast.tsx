import React, {
  FC
} from 'https://cdn.skypack.dev/pin/react@v17.0.1-tOtrZxBRexARODgO0jli/min/react.js';

interface Props {}

const AddToCartToast: FC<Props> = (props) => {
  return (
    <div
      aria-live="assertive"
      aria-atomic="true"
      style={{ position: 'absolute', top: '50%', right: '50%' }}
    >
      <div
        className="toast  d-flex align-items-center"
        data-delay="800"
        style={{ position: 'relative', bottom: '50%', left: '50%' }}
      >
        <div className="toast-body">Item has been added to your cart!</div>
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
