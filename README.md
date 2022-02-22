# Caribbean Heat restaurant Backend

Explore [CaribbeanHeat](https://caribbeanheat.herokuapp.com/)

Caribbean Heat is a restaurant website that allows users to browse the menu and make take out orders online. This website is my modern version take of the original https://caribbeanheat.ca


## Instructions
* clone this repository
* run ```npm install``` inside root directory and frontend directory
* run the seed file
* run ```npm run dev``` in root directory
* navigate to ```localhost:3003``` in your browser

<img width="800" alt="caribbean heat pic" src="https://i.imgur.com/8YNkm5K.png">


## Technologies
### Frontend
* React.js
* Bootstrap


### Backend
* MongoDB
* Express.js
* Node.js

### Api providing endpoints that allow for:

* Getting all menu items
* Getting specific menu item
* Getting all orders
* Creating an order

<img src="https://gifs.com/gif/caribbean-heat-79JWEG" width="800" />


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

### GET /api/orders

Returns all orders

### POST /api/orders

Creates an order


### This to do
* Add error handling
* Add testing
* Restructure subroutes
* Add Admin page
* Add statistics
* style











