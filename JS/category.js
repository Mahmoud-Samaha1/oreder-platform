let favIcons = document.querySelectorAll('.like-icon')

favIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        if (this.classList.contains('fi-rs-heart')) {
            this.classList.replace('fi-rs-heart', 'fi-ss-heart');
        } else {
            this.classList.replace('fi-ss-heart', 'fi-rs-heart');
        }
    });
});
