// data.js
import FruitsVegetables from '../assets/Fruits & Vegetables.png';
import DairyEggs from '../assets/Dairy & Eggs.png';
import MeatSeafood from '../assets/Meat & Seafood.png';
import PantryEssentials from '../assets/Pantry Essentials.png';

import Juices from '../assets/Juices.png';
import SoftDrinks from '../assets/Soft Drinks.png';
import TeaCoffee from '../assets/Tea & Coffee.png';
import WaterSparkling from '../assets/Water & Sparkling.png';

import ChipsCrackers from '../assets/Chips & Crackers.png';
import NutsSeeds from '../assets/Nuts & Seeds.png';
import EnergyBars from '../assets/Energy Bars.png';
import PopcornPretzels from '../assets/Popcorn & Pretzels.png';

import Bread from '../assets/Bread.jpg';
import Bagels from '../assets/Bagels.jpg';
import Pastries from '../assets/Pastries.jpg';
import Donuts from '../assets/Donuts.jpg';

import Cakes from '../assets/Cakes.jpg';
import Cupcakes from '../assets/Cupcakes.jpg';
import Tarts from '../assets/Tarts.jpg';
import Pies from '../assets/Pies.jpg';

import Milk from '../assets/Milk.jpg';
import Yogurt from '../assets/Yogurt.jpg';
import Cheese from '../assets/Cheese.jpg';
import Butter from '../assets/Butter.jpg';

import Chocolates from '../assets/Chocolates.jpg';
import HardCandies from '../assets/Hard Candies.jpg';
import Gummies from '../assets/Gummies.jpg';
import Lollipops from '../assets/Lollipops.jpg';

import BasmatiRice from '../assets/Basmati Rice.jpg';
import JasmineRice from '../assets/Jasmine Rice.jpg';
import BrownRice from '../assets/Brown Rice.jpg';
import InstantBiriani from '../assets/Instant Biriani.jpg';

export const catalogData = {
  Grocery: {
    heading: "Fresh and Healthy Groceries for Your Daily Needs",
    categories: [
      {
        name: "Fruits & Vegetables",
        link: "/products/fruits-vegetables",
        imageUrl: FruitsVegetables,
      },
      {
        name: "Dairy & Eggs",
        link: "/products/dairy-eggs",
        imageUrl: DairyEggs,
      },
      {
        name: "Meat & Seafood",
        link: "/products/meat-seafood",
        imageUrl: MeatSeafood,
      },
      {
        name: "Pantry Essentials",
        link: "/products/pantry-essentials",
        imageUrl: PantryEssentials,
      },
    ],
    bottomLinkName: "Explore all products in Grocery",
    bottomLink: "/grocery",
  },
  Beverage: {
    heading: "Refresh Yourself with Premium Beverages",
    categories: [
      {
        name: "Juices",
        link: "/products/juices",
        imageUrl: Juices,
      },
      {
        name: "Soft Drinks",
        link: "/products/soft-drinks",
        imageUrl: SoftDrinks,
      },
      {
        name: "Tea & Coffee",
        link: "/products/tea-coffee",
        imageUrl: TeaCoffee,
      },
      {
        name: "Water & Sparkling",
        link: "/products/water-sparkling",
        imageUrl: WaterSparkling,
      },
    ],
    bottomLinkName: "Explore all products in Beverage",
    bottomLink: "/beverage",
  },
  Snacks: {
    heading: "Snack Smart, Snack Happy and Be Healthy",
    categories: [
      {
        name: "Chips & Crackers",
        link: "/products/chips-crackers",
        imageUrl: ChipsCrackers,
      },
      {
        name: "Nuts & Seeds",
        link: "/products/nuts-seeds",
        imageUrl: NutsSeeds,
      },
      {
        name: "Energy Bars",
        link: "/products/energy-bars",
        imageUrl: EnergyBars,
      },
      {
        name: "Popcorn & Pretzels",
        link: "/products/popcorn-pretzels",
        imageUrl: PopcornPretzels,
      },
    ],
    bottomLinkName: "Explore all products in Snacks",
    bottomLink: "/snacks",
  },
  "Bread & Bakery": {
    heading: "Freshly Baked Delights for Every Taste",
    categories: [
      {
        name: "Bread",
        link: "/products/bread",
        imageUrl: Bread,
      },
      {
        name: "Bagels",
        link: "/products/bagels",
        imageUrl: Bagels,
      },
      {
        name: "Pastries",
        link: "/products/pastries",
        imageUrl: Pastries,
      },
      {
        name: "Donuts",
        link: "/products/donuts",
        imageUrl: Donuts,
      },
    ],
    bottomLinkName: "Explore all products in Bread & Bakery",
    bottomLink: "/breadBakery",
  },
  "Cake & Pastry": {
    heading: "Indulge in Freshly Baked Cakes and Pastries",
    categories: [
      {
        name: "Cakes",
        link: "/products/cakes",
        imageUrl: Cakes,
      },
      {
        name: "Cupcakes",
        link: "/products/cupcakes",
        imageUrl: Cupcakes,
      },
      {
        name: "Tarts",
        link: "/products/tarts",
        imageUrl: Tarts,
      },
      {
        name: "Pies",
        link: "/products/pies",
        imageUrl: Pies,
      },
    ],
    bottomLinkName: "Explore all products in Cake & Pastry",
    bottomLink: "/cakePastry",
  },
  Dairy: {
    heading: "Fresh Dairy Products to Nourish Your Family",
    categories: [
      {
        name: "Milk",
        link: "/products/milk",
        imageUrl: Milk,
      },
      {
        name: "Yogurt",
        link: "/products/yogurt",
        imageUrl: Yogurt,
      },
      {
        name: "Cheese",
        link: "/products/cheese",
        imageUrl: Cheese,
      },
      {
        name: "Butter",
        link: "/products/butter",
        imageUrl: Butter,
      },
    ],
    bottomLinkName: "Explore all products in Dairy",
    bottomLink: "/dairy",
  },
  "Chocolate & Candy": {
    heading: "Satisfy Your Sweet Tooth with Chocolates and Candies",
    categories: [
      {
        name: "Chocolates",
        link: "/products/chocolates",
        imageUrl: Chocolates,
      },
      {
        name: "Hard Candies",
        link: "/products/hard-candies",
        imageUrl: HardCandies,
      },
      {
        name: "Gummies",
        link: "/products/gummies",
        imageUrl: Gummies,
      },
      {
        name: "Lollipops",
        link: "/products/lollipops",
        imageUrl: Lollipops,
      },
    ],
    bottomLinkName: "Explore all products in Chocolate & Candy",
    bottomLink: "/chocolateCandy",
  },
  "Rice & Biriani": {
    heading: "Discover Premium Rice & Biriani Options",
    categories: [
      {
        name: "Basmati Rice",
        link: "/products/basmati-rice",
        imageUrl: BasmatiRice,
      },
      {
        name: "Jasmine Rice",
        link: "/products/jasmine-rice",
        imageUrl: JasmineRice,
      },
      {
        name: "Brown Rice",
        link: "/products/brown-rice",
        imageUrl: BrownRice,
      },
      {
        name: "Instant Biriani",
        link: "/products/instant-biriani",
        imageUrl: InstantBiriani,
      },
    ],
    bottomLinkName: "Explore all products in Rice & Biriani",
    bottomLink: "/riceBiriani",
  },
};
