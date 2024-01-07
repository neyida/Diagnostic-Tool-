// alert.js
import Swal from '/node_modules/sweetalert2';

function showAlert() {
  Swal.fire({
    title: 'Hello!',
    text: 'This is a SweetAlert2 example.',
    icon: 'success',
  });
}

export { showAlert };
