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
