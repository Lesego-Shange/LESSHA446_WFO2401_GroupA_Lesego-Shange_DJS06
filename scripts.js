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
  // Use the index to access the corresponding province
  console.log(`${name} (${provinces[index]})`);
});

// Exercise 2: Uppercase Transformation
console.log("Exercise 2: Uppercase Transformation");
// Convert all province names to uppercase
const upperCaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(upperCaseProvinces);

// Exercise 3: Name Lengths
console.log("Exercise 3: Name Lengths");
// Get the length of each name
const nameLengths = names.map((name) => name.length);
console.log(nameLengths);

// Exercise 4: Sorting
console.log("Exercise 4: Sorting");
// Create a sorted copy of the provinces array
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// Exercise 5: Filtering Cape
console.log("Exercise 5: Filtering Cape");
// Filter out provinces that include 'Cape' in their names
const filteredProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(filteredProvinces.length);

// Exercise 6: Finding 'S'
console.log("Exercise 6: Finding 'S'");
// Check if each name contains the letter 'S'
const containsS = names.map((name) =>
  name.split("").some((char) => char.toLowerCase() === "s")
);
console.log(containsS);

// Exercise 7: Creating Object Mapping
console.log("Exercise 7: Creating Object Mapping");
// Create an object mapping names to provinces
const nameProvinceMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMapping);

// Advanced Exercise 1: Log Products
console.log("Advanced Exercise 1: Log Products");
// Log the name of each product
console.log(products.map((product) => product.product));

// Advanced Exercise 2: Filter by Name Length
console.log("Advanced Exercise 2: Filter by Name Length");
// Filter products where the name length is 5 or less
console.log(products.filter((product) => product.product.length <= 5));

// Advanced Exercise 3: Price Manipulation
console.log("Advanced Exercise 3: Price Manipulation");
// Calculate the sum of valid prices (non-empty and non-whitespace)
console.log(
  products
    .filter((product) => String(product.price).trim() !== "")
    .reduce((sum, product) => sum + Number(product.price), 0)
);

// Advanced Exercise 4: Concatenate Product Names
console.log("Advanced Exercise 4: Concatenate Product Names");
// Concatenate all product names into a single string
console.log(products.reduce((acc, product) => `${acc}${product.product}`, ""));

// Advanced Exercise 5: Find Extremes in Prices
console.log("Advanced Exercise 5: Find Extremes in Prices");
console.log(
  (() => {
    // Filter out products with invalid prices
    const validProducts = products.filter(
      (product) => String(product.price).trim() !== ""
    );
    // Extract prices and find the highest and lowest
    const prices = validProducts.map((product) => Number(product.price));
    const highestPrice = Math.max(...prices);
    const lowestPrice = Math.min(...prices);
    // Find the products with the highest and lowest prices
    const highestProduct = validProducts.find(
      (product) => Number(product.price) === highestPrice
    );
    const lowestProduct = validProducts.find(
      (product) => Number(product.price) === lowestPrice
    );
    // Return a string describing the products with the highest and lowest prices
    return `Highest: ${highestProduct.product}. Lowest: ${lowestProduct.product}.`;
  })()
);

// Advanced Exercise 6: Object Transformation (alternative implementation)
console.log("Advanced Exercise 6: Object Transformation");
// Transform products array into an object mapping product names to objects with name and cost using Object.entries
console.log(
  Object.entries(products).reduce((acc, [index, product]) => {
    acc[product.product] = { name: product.product, cost: product.price };
    return acc;
  }, {})
);
