// Define Dom Elements
let title = document.getElementById('title');
let total = document.getElementById('total');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let count = document.getElementById('count');
let category = document.getElementById('category');
let search = document.getElementById('search');
let tbody = document.getElementById('tbody');
let createbtn = document.getElementById('create');
let updatebtn = document.getElementById('update');
let deleteAllbtn = document.getElementById('deleteAll');
let updateDiv = document.querySelector('.create-btn');

// console.log(title,total,price,taxes,ads,discount,count,category,search)

// ______________________________________________________________________________________________________________

// get total
function getTotalPrice() {
    if (price.value != "") {
        let totalPrice = (+price.value + +taxes.value + +ads.value) - (+discount.value);
        total.innerHTML = `Total: ${totalPrice}`;
        total.style.backgroundColor = "rgb(32, 180, 51)";
    } else {
        total.innerHTML = `Total:`
        total.style.backgroundColor = "rgb(180, 2, 2)";
    }
}
// create product
let newProducts;
if (localStorage.products != null) {
    newProducts = JSON.parse(localStorage.products);
} else {
    newProducts = [];
}
createbtn.onclick = function () {
    let newProduct = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML.substring(7, total.length),
        count: count.value,
        category: category.value
    }
    newProducts.push(newProduct);
    // save localhost
        localStorage.setItem("products", JSON.stringify(newProducts));
        clearInputs();
    getProducts();
}

// clear inputs
function clearInputs() {
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    getTotalPrice()
    count.value = "";
    discount.value = "";
    category.value = "";
}
// read
function getProducts() {
    let row = "" ;
    for (i = 0; i < newProducts.length; i++) {
        row += `<tr>
                        <td scope="row" class="bg-transparent border-0 text-light text-center">${i+1}</td>
                        <td scope="row" class="bg-transparent border-0 text-light text-center">${newProducts[i].title}</td>
                        <td scope="row" class="bg-transparent border-0 text-light text-center">${newProducts[i].price}</td>
                        <td scope="row" class="bg-transparent border-0 text-light text-center">${newProducts[i].taxes}</td>
                        <td scope="row" class="bg-transparent border-0 text-light text-center">${newProducts[i].ads}</td>
                        <td scope="row" class="bg-transparent border-0 text-light text-center">${newProducts[i].discount}</td>
                        <td scope="row" class="bg-transparent border-0 text-light text-center">${newProducts[i].total}</td>
                        <td scope="row" class="bg-transparent border-0 text-light text-center">${newProducts[i].count}</td>
                        <td scope="row" class="bg-transparent border-0 text-light text-center">${newProducts[i].category}</td>
                        <td scope="row" class="bg-transparent border-0 text-light text-center">
                            <div class="d-grid gap-2">
                                <button type="button" onclick="updateProduct(${i});toggleBtn()" name="" id="" class="btn text-capitalize text-light">
                                    update
                                </button>
                        </td>
                        <td scope="row" class="bg-transparent border-0 text-light text-center">
                            <div class="d-grid gap-2">
                                <button type="button" onclick="deleteProduct(${i})" name="" id="" class="btn text-capitalize text-light">
                                    delete
                                </button>
                            </div>
                        </td>

                    </tr>`
    }
    tbody.innerHTML = row;
    showDeleteAllBtn();
}
getProducts();

// count
// delete
function deleteProduct(i) {
    newProducts.splice(i, 1);
    localStorage.products = JSON.stringify(newProducts);
    getProducts();
}
// ______________________________________________________________________________________________________
// delete All
function showDeleteAllBtn() {
    if (newProducts.length == 0) {
        deleteAllbtn.classList.add('disabled');
        deleteAllbtn.style.border = "none";
        deleteAllbtn.innerHTML = `Delete All`
    } else {
        deleteAllbtn.classList.remove('disabled');
        deleteAllbtn.innerHTML = `Delete All (${newProducts.length})`
    }
}
deleteAllbtn.onclick = function deleteAll() {
    newProducts.splice(0, newProducts.length);
    localStorage.products = JSON.stringify(newProducts);
    getProducts();
}
// ____________________________________________________________________________________________
// update
function toggleBtn(){
    let updateBtn = `<button type="button" onclick="updateProduct(i)" name="update" id="update" class="btn text-light text-center">Update</button>`;
    let createBtn = `<button type="button" name="create" id="create" class="btn text-light text-center">Create</button>`;
    if (updateDiv.firstElementChild.innerHTML == "Create") {
        console.log("create removed")
        updateDiv.innerHTML = '';
    updateDiv.innerHTML = updateBtn;
    } else {
        console.log("update removed")
        updateDiv.innerHTML = '';
        updateDiv.innerHTML = createBtn;
    }
}
function updateProduct(i) {
    

    console.log()
    
    title.value = `${newProducts[i].title}`;
    price.value = newProducts[i].price;
    taxes.value = newProducts[i].taxes;
    ads.value = newProducts[i].ads;
    // getTotalPrice()
    count.value = newProducts[i].count;
    // total.innerHTML = newProducts[i].total;
    discount.value = newProducts[i].discount;
    category.value = `${newProducts[i].category}`;

}
// search
// clean data (validation)
