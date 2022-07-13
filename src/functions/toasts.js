import { toast } from 'react-toastify';

export function createToast(type, text) {
  return toast[type](text, {
    position: 'bottom-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
