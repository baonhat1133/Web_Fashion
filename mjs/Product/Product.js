class Product {
    constructor(id, discount, name, price, image) {
        this.id = id;
        this.discount = discount;
        this.name = name;
        this.price = price;
        this.image = image;
    }
}
class cartProduct extends Product {
    constructor(id, discount, name, price, image, quantity) {
        super(id, discount, name, price, image);
        this.quantity = quantity;
    }
}
export { Product, cartProduct };
