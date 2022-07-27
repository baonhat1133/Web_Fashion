import { cartProduct } from "../Product/Product.js";
export function addlocal(cartPrd:cartProduct[]):void{
    localStorage.setItem("cartProduct",JSON.stringify(cartPrd));
};
export function addlocalTotalPrd(total:number):void{
    localStorage.setItem("totalProduct",JSON.stringify(total));
}
export function getlocal():cartProduct[]{
    if(localStorage.getItem("cartProduct")){
        return JSON.parse(localStorage.getItem("cartProduct"));
    }
    else return [];
};
export function getlocalTotalPrd():number{
    if(localStorage.getItem("totalProduct")){
        return JSON.parse(localStorage.getItem("totalProduct"));
    }
    else return 0;
};