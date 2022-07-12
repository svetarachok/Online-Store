import './global.css';
// import 'nouislider/dist/nouislider.css';
// import * as noUiSlider from 'nouislider';
import { Cards } from './components/Cards';
import { products } from './components/productsData';

// console.log('Hello');
// const priceSlider = document.getElementById('stock-filter') as noUiSlider.target;

// noUiSlider.create(priceSlider, {
//   start: [0, 500],
//   snap: true,
//   connect: true,
//   range: {
//     min: 0,
//     '10%': 50,
//     '20%': 100,
//     '30%': 150,
//     '40%': 500,
//     '50%': 800,
//     max: 1000,
//   },
// });

const cardsSection: HTMLElement = document.querySelector('.main') as HTMLElement;

const cardsData = new Cards();
const cards = cardsData.displayCards(products);
console.log(cards);

cardsSection.append(cards);
