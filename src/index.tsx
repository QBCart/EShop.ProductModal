import React from "react";
import { render } from "react-dom";
import  ProductModal from './product-modal';

const mountModal = ( addToCartFunction, productModalId?: string ) => {
  render(<ProductModal triggerId={productModalId} addToCart ={addToCartFunction} />, document.getElementById('product-modal'));
};

export default mountModal;