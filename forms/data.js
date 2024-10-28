const categories = {
  food: [
    "vegetables",
    "fruit",
    "meat",
    "bread",
    "grains",
    "dairy",
    "legumes",
    "eggs",
  ],
  drink: ["water", "milk", "juice", "tea", "coffee"],
  clothing: [
    "hoodies",
    "pants",
    "socks",
    "tshirts",
    "jackets",
    "shoes",
    "scarves",
    "hats",
  ],
  essentials: ["soap", "toothpaste", "toiletPaper", "shampoo"],
};

const units = {
  food: "kg",
  drink: "litres",
  clothing: "items",
  essentials: "items",
};

const resources = {
  vegetables: {
    displayName: "Vegetables",
    count: 5000,
    rate: 5,
    maxRequest: 5,
  },
  fruit: { displayName: "Fruit", count: 4000, rate: 3, maxRequest: 3 },
  meat: { displayName: "Meat", count: 2000, rate: 2, maxRequest: 2 },
  bread: { displayName: "Bread", count: 3000, rate: 4, maxRequest: 4 },
  grains: { displayName: "Grains", count: 3000, rate: 3, maxRequest: 3 },
  dairy: { displayName: "Dairy", count: 2000, rate: 2, maxRequest: 2 },
  legumes: { displayName: "Legumes", count: 3000, rate: 4, maxRequest: 4 },
  eggs: { displayName: "Eggs", count: 1500, rate: 2, maxRequest: 2 },

  milk: { displayName: "Milk", count: 2500, rate: 2, maxRequest: 2 },
  juice: { displayName: "Juice", count: 3000, rate: 2, maxRequest: 2 },
  tea: { displayName: "Tea", count: 1500, rate: 1, maxRequest: 1 },
  coffee: { displayName: "Coffee", count: 1000, rate: 1, maxRequest: 1 },

  hoodies: { displayName: "Hoodies", count: 1500, rate: 1, maxRequest: 1 },
  pants: { displayName: "Pants", count: 1200, rate: 1, maxRequest: 1 },
  socks: { displayName: "Socks", count: 3000, rate: 2, maxRequest: 2 },
  tshirts: { displayName: "T-Shirts", count: 2500, rate: 1, maxRequest: 1 },
  jackets: { displayName: "Jackets", count: 1000, rate: 1, maxRequest: 1 },
  shoes: { displayName: "Shoes", count: 1000, rate: 1, maxRequest: 1 },
  scarves: { displayName: "Scarves", count: 1500, rate: 1, maxRequest: 1 },
  hats: { displayName: "Hats", count: 1500, rate: 1, maxRequest: 1 },

  soap: { displayName: "Soap", count: 2000, rate: 2, maxRequest: 1 },
  toothpaste: {
    displayName: "Toothpaste",
    count: 2000,
    rate: 2,
    maxRequest: 2,
  },
  toiletPaper: {
    displayName: "Toilet Paper",
    count: 5000,
    rate: 5,
    maxRequest: 5,
  },
  shampoo: { displayName: "Shampoo", count: 1500, rate: 1, maxRequest: 1 },
};
