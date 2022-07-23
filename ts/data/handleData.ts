import { cartProduct } from "../Interface/cartProduct";
function addlocal(cartPrd:cartProduct[]):void{
    localStorage.setItem("cartProduct",JSON.stringify(cartPrd));
};
function getlocal():cartProduct[]{
    if(localStorage.getItem("cartProduct")){
        return JSON.parse(localStorage.getItem("cartProduct"));
    }
    else return [];
};
export {addlocal,getlocal}