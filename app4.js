class Product {
  constructor(id, designation, description, price) {
    this._id = id;
    this._designation = designation;
    this._description = description;
    this._price = price;
  }

  prixTTC() {
    return this.price * 1.2;
  }
}

const iphone = new Product(1, "Iphone 15 Pro Max", "Abc", 1900);
const s25 = new Product(2, "Galaxy S 25", "EFG", 1300);
