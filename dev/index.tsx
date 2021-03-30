import { mountProductModal } from 'product-modal';
import { showToast } from '@qbcart/toast';
import { showAlertModal } from '@qbcart/alert-modal';

mountProductModal(showToast, showAlertModal);
