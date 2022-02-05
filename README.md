# CaribbeanHeat_back
Backend for Caribbean heat restaurant website

<h1 align="center">Caribbean Heat Restaurant</h1>

## About

http://caribbeanheat.herokuapp.com/

Website built with: Node.js Express, MongoDB, React, Bootstrap, Cypress, Jest

Api providing endpoints that allow for:

- Getting all menu items
- Getting specific menu item


## Install

git clone 

npm install

npm run dev

localhost:3003

## Endpoint Documentation

### GET /api/items

Returns a list of all the menu items.


**Successful Response:**

```JSON
[{
title: "Crab Soup",
price: 7.08,
category: "Soup",
image: "https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/soup/fish-maw-crab-meat.jpg",
id: "61edc57a1e1f7b4a69be41f2"
},
{
title: "Chicken Wonton",
price: 7.08,
category: "Soup",
image: "https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/soup/won-ton.jpg",
id: "61edc57b1e1f7b4a69be41f9"
},
{
title: "Sweet Corn With Chicken Soup",
price: 7.08,
category: "Soup",
image: "https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/soup/chicken-corn.jpg",
id: "61edc57b1e1f7b4a69be41fd"
},
{
title: "Spring Roll",
price: 1.75,
category: "Deep Fried",
image: "https://storage.googleapis.com/bro-cdn1/zgrid/themes/11951/images/items/appetizers/pork-spring-roll.jpg",
id: "61edc57b1e1f7b4a69be4201"
}]
```

### GET /api/items/{id}

Returns a item on the menu based on item.




## To Do:

- Add router to handle explicit urls for React router
- Add testing
- Add order model
- Add testing
-*

## Dependencies

[axios] (https://www.npmjs.com/package/axios)


[express] (https://www.npmjs.com/package/express)  
Simple, robust web framework for Node

[nodemon] (https://www.npmjs.com/package/nodemon)  
Performs hot reloading of the application

## Author

👤 **Kevin Nguyen**
