import React from 'react';

const MenuItems = {
  starters: [
    {
      name: 'Ceviche',
      image: '',
      description: '',
      price: '$18',
    },
    {
      name: 'Tequenos',
      image: '',
      description: '',
      price: '$14',
    },
    {
      name: 'Coconut Calamari Basket',
      image: '',
      description: '',
      price: '$17',
    },
    {
      name: 'Steak Truffle Fries',
      image: '',
      description: '',
      price: '$18',
    },
    {
      name: 'Hummus Trio',
      image: '',
      description: '',
      price: '$15',
    },
    {
      name: 'Shrimp & Avo',
      image: '',
      description: '',
      price: '$18',
    },
    {
      name: 'Arancini Balls',
      image: '',
      description: '',
      price: '$18',
    },
    {
      name: 'Patacones',
      image: '',
      description: '',
      price: '$16',
    },
    {
      name: 'Ahi Tuna Nachos',
      image: '',
      description: '',
      price: '$18',
    },
    {
      name: 'Chips & Sofrito',
      image: '',
      description: '',
      price: '$9',
    },
  ],
  soupsSaladsBowls: [
    {
      name: 'Tomato Basil Soup',
      image: '',
      description: '',
      price: '$9',
    },
    {
      name: 'Island Seafood Chowder',
      image: '',
      description: '',
      price: '$11',
    },
    {
      name: 'Gumbo',
      image: '',
      description: '',
      price: '$16',
    },
    {
      name: 'Mediterranean Bowl',
      image: '',
      description: '',
      price: '$16',
    },
    {
      name: 'Caribbean Chicken Bowl',
      image: '',
      description: '',
      price: '$18',
    },
    {
      name: 'Beef Stroganoff Bowl',
      image: '',
      description: '',
      price: '$22',
    },
    {
      name: 'Wild Tuna Poke Bowl',
      image: '',
      description: '',
      price: '$20',
    },
    {
      name: 'Marker 99 Salad',
      image: '',
      description: '',
      price: '$14',
    },
    {
      name: 'Crispy Chicken Caesar Salad',
      image: '',
      description: '',
      price: '$14',
    },
    {
      name: 'Tuna Steak Salad',
      image: '',
      description: '',
      price: '$18',
    },
    {
      name: 'Greek Orzo Salad',
      image: '',
      description: '',
      price: '$16',
    },
  ],
  handhelds: [
    {
      name: 'Caribbean Fish Tacos',
      image: '',
      description: '',
      price: '$18',
    },
    {
      name: 'Argentinian Steak Tacos',
      image: '',
      description: '',
      price: '$18',
    },
    {
      name: 'Shrimp Tacos',
      image: '',
      description: '',
      price: '$17',
    },
    {
      name: 'Pork Tacos',
      image: '',
      description: '',
      price: '$17',
    },
    {
      name: 'Buffalo Chicken Sandwich',
      image: '',
      description: '',
      price: '$18',
    },
    {
      name: 'Marker 99 Burger',
      image: '',
      description: '',
      price: '$20',
    },
    {
      name: 'Spicy Crispy Fish Sandwich',
      image: '',
      description: '',
      price: '$18',
    },
    {
      name: "Chef's Burger",
      image: '',
      description: '',
      price: '$22',
    },
  ],
  flatbreads: [
    {
      name: 'Margherita',
      image: '',
      description: '',
      price: '$17',
    },
    {
      name: 'Stracciatella & Prosciutto',
      image: '',
      description: '',
      price: '$19',
    },
    {
      name: 'Jardin',
      image: '',
      description: '',
      price: '$17',
    },
    {
      name: 'Pesto & Chorizo',
      image: '',
      description: '',
      price: '$19',
    },
    {
      name: 'Marker 99',
      image: '',
      description: '',
      price: '$19',
    },
    {
      name: 'Quatrro Formaggi',
      image: '',
      description: '',
      price: '$17',
    },
    {
      name: 'Garlic Broccoli & Shrimp',
      image: '',
      description: '',
      price: '$19',
    },
    {
      name: 'Spinach Chicken Alfredo',
      image: '',
      description: '',
      price: '$18',
    },
  ],
  entrées: [
    {
      name: 'Grilled Skirt Steak',
      image: '',
      description: '',
      price: '$30',
    },
    {
      name: 'Grilled Ribeye',
      image: '',
      description: '',
      price: '$40',
    },
    {
      name: 'Shrimp & Salmon Alla Vodka',
      image: '',
      description: '',
      price: '$28',
    },
    {
      name: 'Teriyaki Drumsticks',
      image: '',
      description: '',
      price: '$17',
    },
    {
      name: 'Truffle Gnocchi',
      image: '',
      description: '',
      price: '$22',
    },
    {
      name: 'Mushroom Alfredo Penne',
      image: '',
      description: '',
      price: '$22',
    },
    {
      name: 'Teriyaki Salmon',
      image: '',
      description: '',
      price: '$29',
    },
    {
      name: 'Swordfish Schnitzel',
      image: '',
      description: '',
      price: '$25',
    },
    {
      name: 'Prosciutto Scallop Tagliatelle',
      image: '',
      description: '',
      price: '$32',
    },
    {
      name: 'Fish Cartoccio',
      image: '',
      description: '',
      price: '$MP',
    },
  ],
  // kidsAndSides: [
  //   {
  //     name: 'French Fries',
  //     image: '/menu/french-fries.jpg',
  //     description: 'Crispy golden fries',
  //     price: '$3.99',
  //   },
  //   {
  //     name: 'Side Salad',
  //     image: '/menu/side-salad.jpg',
  //     description: 'Mixed greens with house dressing',
  //     price: '$4.99',
  //   },
  //   {
  //     name: 'Truffle Fries',
  //     image: '/menu/truffle-fries.jpg',
  //     description: 'Fries with truffle oil and Parmesan',
  //     price: '$6.99',
  //   },
  //   {
  //     name: 'Chicken Tenders',
  //     image: '/menu/chicken-tenders.jpg',
  //     description: 'Crispy chicken tenders with fries',
  //     price: '$7.99',
  //   },
  //   {
  //     name: 'Kids Burger',
  //     image: '/menu/kids-burger.jpg',
  //     description: 'Small beef patty with cheese',
  //     price: '$6.99',
  //   },
  // ],
};

export default MenuItems;
