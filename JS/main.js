// Lazy loading images

document.addEventListener("DOMContentLoaded", function () {
    const images = Array.from(document.getElementsByTagName("img")).filter(img => img.hasAttribute("data-src"));

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-src");
                img.removeAttribute("data-src");
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => observer.observe(img));
});
//_________________________________________________________
// Nav Bar
window.onload = function () {
    let savedPage = localStorage.getItem('selectedPage') || 'main';
    applySelectedPage(savedPage);
};

function savePage(pageName) {
    localStorage.setItem('selectedPage', pageName); // Save selected page before navigating
}

function applySelectedPage(pageName) {
    resetIcons();

    let iconMap = {
        main: { selector: '.main', defaultClass: 'fi-rr-home', selectedClass: 'fi-ss-home' },
        offer: { selector: '.offer', defaultClass: 'fi-rr-badge-percent', selectedClass: 'fi-ss-badge-percent' },
        about: { selector: '.about', defaultClass: 'fi-rr-info', selectedClass: 'fi-ss-info' }
    };

    if (iconMap[pageName]) {
        let icon = document.querySelector(iconMap[pageName].selector);
        if (icon) {
            icon.classList.remove(iconMap[pageName].defaultClass);
            icon.classList.add(iconMap[pageName].selectedClass);
        }
    }
}

function resetIcons() {
    let icons = [
        { selector: '.main', defaultClass: 'fi-rr-home', selectedClass: 'fi-ss-home' },
        { selector: '.offer', defaultClass: 'fi-rr-badge-percent', selectedClass: 'fi-ss-badge-percent' },
        { selector: '.about', defaultClass: 'fi-rr-info', selectedClass: 'fi-ss-info' }
    ];

    icons.forEach(iconObj => {
        let icon = document.querySelector(iconObj.selector);
        if (icon) {
            icon.classList.remove(iconObj.selectedClass);
            icon.classList.add(iconObj.defaultClass);
        }
    });
}

//_________________________________________________________
// home page 
let items = document.querySelector('.items');

function getCategories() {
    console.log(items);

    let categoriesList = [1, 2, 3, 4, 5, 6, 7, 8];
    let category = '';

    for (let i = 0; i < categoriesList.length; i++) {
        category += `
        <div class="item col-4"  data-id="${categoriesList[i]}">
            <a  class="d-flex justify-content-center align-items-center flex-column">
                <img class="mb-1" src="/assets/images/66MTIsqFHUgKyzrPYh266VvDFsGbkK9WduHU4ALV.jpg" alt=""/>
                <h6>قسم ${categoriesList[i]}</h6>
            </a>
        </div>`;
    }

    items.innerHTML = category;
    document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('click', function () {
            let categoryId = this.dataset.id;
            console.log(categoryId + ' smaha');
            window.location.href = `/category.html?id=${categoryId}`;
        });
    });
}
getCategories();
// _____________________________________________________________
// category page
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
// _______________________________________________
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
console.log(scrollToTopBtn);

// Show button when scrolling down
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) { // Show after scrolling 300px
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Smooth scroll to top
scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});