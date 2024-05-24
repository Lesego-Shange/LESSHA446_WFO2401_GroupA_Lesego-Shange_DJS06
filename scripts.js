// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Exercise 1: ForEach Basics
console.log("Exercise 1: ForEach Basics");
// Log each name
names.forEach((name) => console.log(name));

// Log each province
provinces.forEach((province) => console.log(province));

// Log each name with matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Exercise 2: Uppercase Transformation
console.log("Exercise 2: Uppercase Transformation");
const upperCaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(upperCaseProvinces);

// Exercise 3: Name Lengths
console.log("Exercise 3: Name Lengths");
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// Exercise 4: Sorting
console.log("Exercise 4: Sorting");
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// Exercise 5: Filtering Cape
console.log("Exercise 5: Filtering Cape");
const filteredProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(filteredProvinces.length);

// Exercise 6: Finding 'S'
console.log("Exercise 6: Finding 'S'");
const containsS = names.map((name) =>
  name.split("").some((char) => char.toLowerCase() === "s")
);
console.log(containsS);

// Exercise 7: Creating Object Mapping
console.log("Exercise 7: Creating Object Mapping");
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);

// Advanced Exercise 1: Log Products
console.log("Advanced Exercise 1: Log Products");
console.log(products.map((product) => product.product));

// Advanced Exercise 2: Filter by Name Length
console.log("Advanced Exercise 2: Filter by Name Length");
console.log(products.filter((product) => product.product.length <= 5));

// Advanced Exercise 3: Price Manipulation
console.log("Advanced Exercise 3: Price Manipulation");
console.log(
  products
    .filter((product) => String(product.price).trim() !== "")
    .reduce((sum, product) => sum + Number(product.price), 0)
);

// Advanced Exercise 4: Concatenate Product Names
console.log("Advanced Exercise 4: Concatenate Product Names");
console.log(products.reduce((acc, product) => `${acc}${product.product}`, ""));

// Advanced Exercise 5: Find Extremes in Prices
console.log("Advanced Exercise 5: Find Extremes in Prices");
console.log(
  (() => {
    const validProducts = products.filter(
      (product) => String(product.price).trim() !== ""
    );
    const prices = validProducts.map((product) => Number(product.price));
    const highestPrice = Math.max(...prices);
    const lowestPrice = Math.min(...prices);
    const highestProduct = validProducts.find(
      (product) => Number(product.price) === highestPrice
    );
    const lowestProduct = validProducts.find(
      (product) => Number(product.price) === lowestPrice
    );
    return `Highest: ${highestProduct.product}. Lowest: ${lowestProduct.product}.`;
  })()
);

// Advanced Exercise 6: Object Transformation
console.log("Advanced Exercise 6: Object Transformation");
console.log(
  products.reduce((acc, product) => {
    acc[product.product] = { name: product.product, cost: product.price };
    return acc;
  }, {})
);

// Advanced Exercise 6: Object Transformation
console.log("Advanced Exercise 6: Object Transformation");
console.log(
  Object.entries(products).reduce((acc, [index, product]) => {
    acc[product.product] = { name: product.product, cost: product.price };
    return acc;
  }, {})
);
