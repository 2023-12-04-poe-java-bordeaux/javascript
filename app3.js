function Product(id, designation, description, price) {
  this.id = id;
  this.designation = designation;
  this.description = description;
  this.price = price;
  // this.prixTTC = function () {
  //   return this.price * 1.2;
  // };
}

Product.prototype.prixTTC = function () {
  return this.price * 1.2;
};

const iphone = new Product(1, "Iphone 15 Pro Max", "Abc", 1900);
const s25 = new Product(2, "Galaxy S 25", "EFG", 1300);
