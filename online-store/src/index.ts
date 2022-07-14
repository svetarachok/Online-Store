import './global.css';
import { ProductsUI } from './components/UI/ProductsUI';
import { products } from './components/Data/productsData';
import { FilterAttributes } from './components/FilterAttributes';

const cardsSection: HTMLElement = document.querySelector('.products__section') as HTMLElement;
const colorFilterInputs: HTMLInputElement[] = [...document.querySelectorAll<HTMLInputElement>('.color')];

const cardsData = new ProductsUI();
const filter = new FilterAttributes([]);
const cards = cardsData.displayCards(products);

cardsSection.append(cards);

colorFilterInputs.forEach((input) => {
  input.addEventListener('change', (e: Event) => {
    e.preventDefault();
    //if checked add eslse remove
    filter.add(String(input.value));
    //filter.remove(e)
    console.log(filter);
    const filteredProducts = filter.filterProducts(products);
    const filteredCards = cardsData.displayCards(filteredProducts);
    cardsSection.innerHTML = '';
    cardsSection.append(filteredCards);
  });
});
