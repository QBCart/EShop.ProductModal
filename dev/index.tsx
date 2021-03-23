import mountProductModal from '../src/index';
import { mountToast, showToast } from 'https://cdn.skypack.dev/@qbcart/toast';

mountToast();
mountProductModal(showToast);
