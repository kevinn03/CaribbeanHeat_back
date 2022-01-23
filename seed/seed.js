require('dotenv').config();
const mongoose = require('mongoose');
const Item = require('../models/item');

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Mongo connection open');
}

const menu = [
  {
    title: 'Crab Soup',
    price: 7.08,
    category: 'Soup',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/soup/fish-maw-crab-meat.jpg',
  },
  {
    title: 'Chicken Wonton',
    price: 7.08,
    category: 'Soup',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/soup/won-ton.jpg',
  },
  {
    title: 'Sweet Corn With Chicken Soup',
    price: 7.08,
    category: 'Soup',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/soup/chicken-corn.jpg',
  },
  {
    title: 'Spring Roll',
    price: 1.75,
    category: 'Deep Fried',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/appetizers/pork-spring-roll.jpg',
  },
  {
    title: 'Fried Wonton',
    price: 11.5,
    category: 'Deep Fried',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/appetizers/sweet-sour-won-ton.jpg',
  },
  {
    title: 'Fried Chicken Wings',
    price: 12.39,
    category: 'Deep Fried',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/chicken/dai-ching-chicken.jpg',
  },

  {
    title: 'BBQ Spare Ribs',
    price: 12.39,
    category: 'BBQ Roast',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/pork/sweet-sour-spare-ribs.jpg',
  },
  {
    title: 'BBQ Chicken Legs',
    price: 12.39,
    category: 'BBQ Roast',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/chicken/chong-qing-chicken.jpg',
  },
  {
    title: 'BBQ Pork',
    price: 12.39,
    category: 'BBQ Roast',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/pork/honey-garlic-sliced-pork.jpg',
  },

  {
    title: 'Sweet & Sour Pork',
    price: 11.5,
    category: 'Sweet & Sour',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/pork/sweet-sour.jpg',
  },
  {
    title: 'Sweet & Sour Chicken',
    price: 12.39,
    category: 'Sweet & Sour',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/chicken/sweet-sour.jpg',
  },
  {
    title: 'Sweet & Sour Chicken Balls',
    price: 12.39,
    category: 'Sweet & Sour',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/dimsum/pork-dumpling.jpg',
  },

  {
    title: 'Assorted Seafood With Vegetables',
    price: 17.7,
    category: 'Hot Sizzling Dishes',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/seafood/prawns-scallops-black-bean.jpg',
  },
  {
    title: 'Beef Tenderloin',
    price: 14.16,
    category: 'Hot Sizzling Dishes',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/beef/honey-garlic-beef.jpg',
  },
  {
    title: 'Sliced Chicken With Black Bean Sauce',
    price: 14.16,
    category: 'Hot Sizzling Dishes',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/chicken/green-pepper-chicken.jpg',
  },

  {
    title: 'Pork Fried Rice',
    price: 9.73,
    category: 'Fried Rice',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/rice/pork-fried-rice.jpg',
  },
  {
    title: 'Chicken Fried Rice',
    price: 12.39,
    category: 'Fried Rice',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/rice/chicken-fried-rice.jpg',
  },
  {
    title: 'Beef Fried Rice',
    price: 11.5,
    category: 'Fried Rice',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/rice/fried-rice-beef.jpg',
  },

  {
    title: 'Chicken Chow Mein',
    price: 12.39,
    category: 'Chow Mein',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/noodles/shredded-chicken-chow-mein.jpg',
  },
  {
    title: 'Pork Chow Mein',
    price: 12.39,
    category: 'Chow Mein',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/noodles/pork-chow-mein.jpg',
  },
  {
    title: 'Beef Chow Mein',
    price: 12.39,
    category: 'Chow Mein',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/noodles/chicken-broccoli-chow-mein.jpg',
  },

  {
    title: 'Pork Lo Mein',
    price: 12.39,
    category: 'Lo Mein',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/noodles/shanghai-chow-mein.jpg',
  },
  {
    title: 'Vegetable Lo Mein',
    price: 11.59,
    category: 'Lo Mein',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/noodles/bean-sprout-chow-mein.jpg',
  },
  {
    title: 'Chicken Lo Mein',
    price: 11.59,
    category: 'Lo Mein',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/noodles/sliced-chicken-chow-mein.jpg',
  },

  {
    title: 'Hot & Spicy Shrimp',
    price: 15.93,
    category: 'House Specials',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/seafood/prawns-red-chili-sauce.jpg',
  },
  {
    title: 'Spicy Wings',
    price: 15.05,
    category: 'House Specials',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/chicken/general-tsos.jpg',
  },
  {
    title: 'Hot & Spicy Squid',
    price: 15.93,
    category: 'House Specials',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/seafood/spicy-squid.jpg',
  },
  {
    title: 'Hot & Spicy Assorted Seafood',
    price: 17.7,
    category: 'House Specials',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/seafood/sweet-sour-fish.jpg',
  },
  {
    title: 'Honey Garlic Ribs',
    price: 15.05,
    category: 'House Specials',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/pork/honey-garlic-spareribs.jpg',
  },
  {
    title: 'Jerk Ribs',
    price: 14.16,
    category: 'House Specials',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/pork/sweet-sour-spare-ribs.jpg',
  },

  {
    title: 'Shrimp Egg Foo Yung',
    price: 12.39,
    category: 'Egg Fu Yung',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/eggs/egg-with-shrimp.jpg',
  },
  {
    title: 'Chicken Egg Foo Yung',
    price: 12.39,
    category: 'Egg Fu Yung',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/eggs/egg-foo-yung-sprouts.jpg',
  },
  {
    title: 'Vegetable Egg Foo Yung',
    price: 12.39,
    category: 'Egg Fu Yung',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/eggs/egg-foo-yung.jpg',
  },

  {
    title: 'Mixed Vegetables No Meat',
    price: 11.5,
    category: 'Vegetable Mixed',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/vegetables/deluxe-mixed-vegetables.jpg',
  },
  {
    title: 'Chicken Vegetables',
    price: 12.39,
    category: 'Vegetable Mixed',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/duck/lettuce-wrap.jpg',
  },
  {
    title: 'Shrimp Vegetables',
    price: 15.93,
    category: 'Vegetable Mixed',
    image:
      'https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/seafood/prawns-cashews.jpg',
  },

  {
    title: 'Coke',
    price: 1.75,
    category: 'Beverages',
    image:
      'https://icons.iconarchive.com/icons/michael/coke-pepsi/256/Coca-Cola-Can-icon.png',
  },
  {
    title: 'Sprite',
    price: 1.75,
    category: 'Beverages',
    image:
      'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00049000001327/e2a2a0e14492f895fef04f65d4f60c20_large.png&width=256&type=webp&quality=40',
  },
  {
    title: 'Ginger Ale',
    price: 1.75,
    category: 'Beverages',
    image:
      'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00078000009743/df978ecf4378773bd8a202d57d007569_large.png&width=256&type=webp&quality=80',
  },
  {
    title: 'Nestea',
    price: 1.75,
    category: 'Beverages',
    image:
      'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00088130444253/3ec19ce2002e196bfae7e3cb4232a66b_large.png&width=256&type=webp&quality=80',
  },
  {
    title: 'Coconut Water',
    price: 2.75,
    category: 'Beverages',
    image:
      'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00055270831441/db8ca3a44fdcf1e025bc59cd9a58396f_large.png&width=256&type=webp&quality=80',
  },
  {
    title: 'Molson Canadian',
    price: 2.75,
    category: 'Beverages',
    image:
      'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00068213034519/ee171cfc312ed854503fa24b96d4359c_large.png&width=256&type=webp&quality=80',
  },
  {
    title: 'Heineken',
    price: 2.75,
    category: 'Beverages',
    image:
      'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00072890000316/0ca5dd1ab5be6b29914ee56f47e62056_large.png&width=256&type=webp&quality=80',
  },
  {
    title: 'Corona',
    price: 2.75,
    category: 'Beverages',
    image:
      'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00080660956152/ea0d5318a916b33703b56bf4f470feed_large.png&width=256&type=webp&quality=80',
  },
];

const loadItem = async () => {
  for (let item of menu) {
    const food = new Item(item);
    await food.save();
  }
};
