import './global.css';
import { Cards } from './components/Cards';
import { products } from './components/productsData';

const cardsSection: HTMLElement = document.querySelector('.main') as HTMLElement;

const cardsData = new Cards();
const cards = cardsData.displayCards(products);
console.log(cards);

cardsSection.append(cards);
