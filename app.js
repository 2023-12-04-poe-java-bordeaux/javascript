const product = {
  id: 1,
  designation: "Iphone 15 Pro Max",
  description:
    "When measured as a standard rectangular shape, the screen is 6.12 inches diagonally (actual viewable area is less). iPhone 15 Plus. Super Retina XDR display. 6.7‑inch (diagonal) all‑screen OLED display. 2796‑by‑1290-pixel resolution at 460 ppi.",
  price: 2500,
  stock: 200,
  prixTTC() {
    return price * 1.2;
  },
};

// console.log(`ID : ${product.id}`);
// console.log(`Designation : ${product.designation}`);
// console.log(`Price : ${product.price}`);
// console.log(`Description : ${product.description}`);

// Sans destructuration
// console.log(`
//  # : ${product.id}
//  Designation : ${product.designation}
//  Description: ${product.description}
//  Price : ${product.price}
// `);

// Avec Destructuration
const { id, designation, description, price } = product;

// let id = product.id;
// let designation = product.designation;
// let description = product.description;
// let price = product.price;

console.log(`
 # : ${id}
 Designation : ${designation}
 Description: ${description}
 Price : ${price}
 Price TTC : ${product.prixTTC()}
`);

const user = {
  id: 1,
  name: "Christian Lisangola",
  email: "christian.lisangola@gmail.com",
  address: {
    street: "Abc",
    city: "Efg",
    zipCode: "3673637",
    // geo: [-37.3433, 81.1445],
    geo: {
      lat: -37.3433,
      lng: 81.1445,
    },
  },
};

const {
  name,
  email,
  address: {
    street,
    city,
    zipCode,
    geo: { lat, lng },
  },
} = user;

console.log(`
name : ${name}
Email : ${email}
Street : ${street}
City : ${city}
Zip code : ${zipCode}
LatLon : [${lat},${lng}]
`);
