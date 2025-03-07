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

