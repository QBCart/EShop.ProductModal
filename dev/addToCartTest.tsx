import * as React from './skypack';
import type { FC } from './skypack';
import { useLocalDB } from '@qbcart/eshop-local-db';

import ProductModal from '../src/index';

interface Props {
  imagesStorageUrl: string;
}

const AddToCartTest: FC<Props> = (props) => {
  const localDB = useLocalDB();

  return <ProductModal imagesStorageUrl={props.imagesStorageUrl} />;
};

export default AddToCartTest;
