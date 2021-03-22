import mountProductModal from '../src/index';
import { mountToast, showToast } from '@qbcart/toast';

mountToast();
mountProductModal(showToast);
