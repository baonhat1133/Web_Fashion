import { addlocal } from "../data/handleData";
//load data from fake API
var bestsellPrdAPI = "http://localhost:3000/bestsellProduct";
getBestsellPrd(function (dataBest) {
    renderBestPrd(dataBest);
    console.log(dataBest);
});
function getBestsellPrd(callback) {
    fetch(bestsellPrdAPI).then(function (response) {
        return response.json();
    })
        .then(callback);
}
function renderBestPrd(product) {
    var bestsellPrds = document.querySelector(".bestsell-products");
    var htmls = product.map((product) => {
        return `
        <li>
            <div class="img-product">
                <img src="${product.image}" alt="${product.id}"> 
                <p>${product.discount}%</p>
                <button class="addlocal" idProduct=${product.id}>Add Cart</button>
            </div>
            <div class="txt-product">
                <h3>${product.name}</h3>
                <div class="price-product">
                    <p class="current-price">${product.price} <sup>đ</sup></p>
                    <p style="text-decoration: line-through;">${product.price * (1 + (product.discount) / 100)} <sup>đ</sup></p>
                </div>
            </div>
        </li> `;
    });
    bestsellPrds.innerHTML = htmls.join('');
    clickEventAddCart(product);
}
var newPrdAPI = "http://localhost:3000/newProduct";
getNewPrd((product) => {
    renderNewPrd(product);
});
function getNewPrd(callback) {
    fetch(newPrdAPI).then(function (response) {
        return response.json();
    })
        .then(callback);
}
function renderNewPrd(product) {
    var newProducts = document.querySelector(".new-products");
    var htmls = product.map((product) => {
        if (product.discount != 0) {
            return `
            <li>
                <div class="img-product">
                    <img src="${product.image}" alt="${product.id}"> 
                    <p>${product.discount}%</p>
                    <button class="addlocal" idProduct=${product.id}>Add Cart</button>
                </div>
                <div class="txt-product">
                    <h3>${product.name}</h3>
                    <div class="price-product">
                        <p class="current-price">${product.price} <sup>đ</sup></p>
                        <p style="text-decoration: line-through;">${product.price * (1 + (product.discount) / 100)} <sup>đ</sup></p>
                    </div>
                </div>
            </li> `;
        }
        else {
            return `
            <li>
                <div class="img-product">
                    <img src="${product.image}" alt="${product.id}"> 
                    <button class="addlocal" idProduct=${product.id}>Add Cart</button>
                </div>
                <div class="txt-product">
                    <h3>${product.name}</h3>
                    <div class="price-product">
                        <p class="current-price">${product.price} <sup>đ</sup></p>
                    </div>
                </div>
            </li> `;
        }
    });
    newProducts.innerHTML = htmls.join('');
    clickEventAddCart(product);
}
//Add Cart
var listCartClick = [];
var productCart;
function clickEventAddCart(product) {
    const addPrdLocal = document.getElementsByClassName("addlocal");
    for (let btn of addPrdLocal) {
        btn.addEventListener("click", () => {
            const idProduct = Number(btn.getAttribute("idProduct"));
            addProductLocal(product, idProduct);
        });
    }
}
function addProductLocal(product, idProduct) {
    product.forEach((product) => {
        if (idProduct === product.id) {
            productCart = Object.assign(Object.assign({}, product), { quantity: 1 });
            listCartClick.push(productCart);
            addlocal(listCartClick);
        }
    });
}
