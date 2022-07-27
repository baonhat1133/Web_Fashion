class Product{
    public id:number;
    public discount:number;
    public name:string;
    public price:number;
    public image:string;

    constructor(id:number,discount:number,name:string,price:number,image:string){
     this.id = id;
     this.discount = discount;
     this.name = name;
     this.price = price;
     this.image = image;
    }
}
class cartProduct extends Product{
    quantity:number;
    constructor(id,discount,name,price,image,quantity){
        super(id,discount,name,price,image);
        this.quantity = quantity;
    }
}
export {Product,cartProduct}
