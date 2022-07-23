// import {addlocal,getlocal} from "../data/handleData"
import { Product } from "../Interface/Product";
import { cartProduct } from "../Interface/cartProduct";
import {addlocal,getlocal} from "../data/handleData"
//load data from fake API
var bestsellPrdAPI:string="http://localhost:3000/bestsellProduct";
getBestsellPrd(function(dataBest):void{
    renderBestPrd(dataBest);
    console.log(dataBest);
});
function getBestsellPrd(callback):void{
    fetch(bestsellPrdAPI).then(function(response) {
        return response.json();
    })
    .then(callback);
}

function renderBestPrd(product){
    var bestsellPrds=document.querySelector(".bestsell-products");
    var htmls=product.map((product)=>{
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
                    <p style="text-decoration: line-through;">${product.price*(1+(product.discount)/100)} <sup>đ</sup></p>
                </div>
            </div>
        </li> `;
    })
    bestsellPrds.innerHTML=htmls.join('');
    clickEventAddCart(product);
}


var newPrdAPI:string="http://localhost:3000/newProduct";
getNewPrd((product)=>{
    renderNewPrd(product);
})
function getNewPrd(callback){
    fetch(newPrdAPI).then(function(response){
        return response.json();
    })
    .then(callback)
}
function renderNewPrd(product){
    var newProducts=document.querySelector(".new-products");
    var htmls=product.map((product)=>{
        if(product.discount!=0){
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
                        <p style="text-decoration: line-through;">${product.price*(1+(product.discount)/100)} <sup>đ</sup></p>
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
        
    })
    newProducts.innerHTML =htmls.join('');
    clickEventAddCart(product);
}




