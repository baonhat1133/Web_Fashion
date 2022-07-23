import {Product} from "./Product"
type cartProduct=Product & {
    quantity:number;
}
export {cartProduct}