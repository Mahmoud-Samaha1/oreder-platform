// toast show function
document.addEventListener('DOMContentLoaded', function () {
    const toastEl = document.querySelector('.toast');
    const toast = new bootstrap.Toast(toastEl, { autohide: false, delay: 0 });
    toast.show();
});