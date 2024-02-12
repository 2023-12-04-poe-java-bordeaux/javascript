function Product(id, designation, description, price) {
  // Comportement avec le mot clé "new"
  // {}
  this.id = id; // {id:1}
  this.designation = designation; //{id:1, designation:"Iphone 15 Pro Max"}
  this.description = description; //{id:1, designation:"Iphone 15 Pro Max",description:"Abc"}
  this.price = price; //{id:1, designation:"Iphone 15 Pro Max",description:"Abc",price:1900}
  // return {id:1, designation:"Iphone 15 Pro Max",description:"Abc",price:1900}
}

// :D :D
const iphoneBad = Product(1, "Iphone 15 Pro Max", "Abc", 1900);

// Best practice
const iphone = new Product(1, "Iphone 15 Pro Max", "Abc", 1900);
