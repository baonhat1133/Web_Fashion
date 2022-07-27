import {cartProduct} from "../Product/Product.js"
import {addlocal,addlocalTotalPrd,getlocal,getlocalTotalPrd} from "../localStorage/handleData.js"
import {totalPrdCart} from "./home.js"
//update quantity button cart
updateCartItem();
function updateCartItem(){
    document.querySelector(".quantity-cart").innerHTML=`<div id="quantity-addcart">${getlocalTotalPrd()}</div>`;
}
//Cart
// const listProductCart=document.querySelector(".list-product-cart");
var listLocal:cartProduct[]=getlocal();
renderListlocal();
function renderListlocal():void{
    var htmlEmpty:string;
    var html:string="";
    var htmls:string="";
    if(listLocal.length===0){
        htmlEmpty=` <div class="empty-cart">
                    <h3>Giỏ hàng trống.....</h3>
                </div>`;
            document.querySelector(".list-product-cart").innerHTML=htmlEmpty;            
    }
    else {
        listLocal.forEach((product)=>{
            html= `
            <div class="product-cart">
                <div class="infoCartPrd">
                    <img src="${product.image}" alt="">
                    <div class="name-product">
                        <p>${product.name}</p>
                    </div>
                </div>
                <div class="input-amount">
                    <button class="btn-state decrease" idPrdCart="${product.id}"">-</button>
                    <input class="input-quantity" name="" value="${product.quantity}" min="1" >
                    <button class="btn-state increase" idPrdCart="${product.id}"">+</button>
                </div>
                <div class="box-moneypay">
                    <div class="price-product">
                        <p style="font-weight:bold;">${product.price+product.price*(product.discount/100)}đ</p>
                        <del style="color:rgb(131, 131, 131);">${product.price}đ</del>
                        <p style="color:red;">Giảm ${product.discount}%</p>
                    </div>
                    <div class="pay-money">
                        <p style="font-weight:bold;">Thành tiền:</p>
                        <span style="color:rgb(151, 8, 8);font-weight:bold; ">${(product.price+product.price*(product.discount/100))*product.quantity}đ</span>
                    </div>
                </div>
                <div class="delete-product">
                    <button type="text" class="delItem" idDel="${product.id}">Delete</button>
                </div>
            </div>
            `;
            htmls+=html;
            document.querySelector(".list-product-cart").innerHTML=htmls;
        })

    }
    updatePrdQuantity();
    updateButtonCartHeader();
    clickDelProduct();
    totalPayment();
}

//update quantity of product
function updatePrdQuantity():void{
  const idPrd:HTMLCollection=document.getElementsByClassName("btn-state");
  for(let btn of idPrd){
    btn.addEventListener("click",()=>{
        
      if(btn.textContent==="-"){
        changeQuantityLocal(Number(btn.getAttribute("idPrdCart")),"decrease");
      }
      else{
        changeQuantityLocal(Number(btn.getAttribute("idPrdCart")),"increase");
      }
     renderListlocal();
    })
  }
}
var totalLocal:number=getlocalTotalPrd();
function changeQuantityLocal(index:number,state:string):void{
   listLocal.map((product,i)=>{
        if(product.id===index && state==="increase"){
            listLocal[i].quantity++;
            totalLocal++;
        }
        else if(product.id===index && state==="decrease" && product.quantity>1){
            listLocal[i].quantity--;
            totalLocal--;
        }
    })
    addlocal(listLocal);
    addlocalTotalPrd(totalLocal);
}
function updateButtonCartHeader(){
    document.querySelector(".quantity-cart").innerHTML=`<div id="quantity-addcart">${getlocalTotalPrd()}</div>`;
}

//Delete product
function clickDelProduct():void{
    const btn_del:HTMLCollection=document.getElementsByClassName("delItem");
    for(let btn of btn_del){
        btn.addEventListener("click",()=>{
            deleteLocal(Number(btn.getAttribute("idDel")));
            renderListlocal();
            location.reload();
        })
    }
}

function deleteLocal(idDel:number){
    let productFilter:cartProduct[]; 
    let totalDel:number=getlocalTotalPrd();
    productFilter=listLocal.filter((product)=>{
        if(product.id===idDel && totalDel>=0){
            totalDel-=product.quantity;
        }
        return product.id!==idDel;
    })
    addlocalTotalPrd(totalPrdCart(productFilter));
    addlocal(productFilter);
   
}

// Total money in info
function totalPayment():void{
    var totalPay:number=listLocal.reduce((total,product,i)=>{
        return total+=product.quantity*product.price;
    },0)
    renderInfoPayment(totalPay);
}
function renderInfoPayment(totalPay:number){
    let htmlPay:string="";
    let freeship:number=0;
    if(totalPay>=400000){
        freeship =40000;
    }
    htmlPay=`
    <div class="content-right-cart">
        <h4>Thông tin đơn hàng</h4>
        <div class="temp-money">
            <p class="txt-m-ord">Tạm tính:</p>
            <p >${totalPay}đ</p>
        </div>
        <div class="fee-ship ">
            <p class="txt-m-ord">Phí vận chuyển:</p>
            <p>Miễn phí (>= 400k)</p>
        </div>
        <div class="note-ship">
            <span><i class="fas fa-shipping-fast"></i>Đơn hàng từ 400,000đ sẽ được miễn phí giao hàng (-40.000đ)</span>
        </div>
        <div class="total-payment">
            <p class="txt-m-ord">Tổng tiền:</p>
            <p>${totalPay-freeship}đ</p>
        </div>
        <div class="btn-payment">
            <button type="text">THANH TOÁN</button>
        </div>
    </div>
    `;
    document.querySelector(".right-cart").innerHTML=htmlPay;
}