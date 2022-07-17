import './global.css';
import { ProductsUI } from './components/UI/ProductsUI';
import { products } from './components/Data/productsData';
import { AttributesFilter } from './components/Filters/AttributesFilter';
import { Cart } from './components/Cart';

const cardsSection: HTMLElement = document.querySelector('.products__section') as HTMLElement;
const colorFilterInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>('.color');
const brandFilterInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>('.brand');
const memoryFilterInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>('.memory');

const cardsData = new ProductsUI(products);
const attributesFilter = new AttributesFilter([]);
const cart = new Cart();
let cards = cardsData.displayCards(products);
cardsSection.append(cards);

[...colorFilterInputs, ...brandFilterInputs, ...memoryFilterInputs].forEach((input) => {
  input.addEventListener('change', (e: Event) => {
    e.preventDefault();
    if (input.checked) {
      attributesFilter.add(String(input.value));
    } else {
      attributesFilter.remove(String(input.value));
    }
    const filtered = attributesFilter.filterProducts(cardsData.products);
    cards = cardsData.displayCards(filtered);
    cardsSection.innerHTML = '';
    cardsSection.append(cards);
  });
});

const cartButtons: NodeListOf<HTMLDivElement> = document.querySelectorAll<HTMLDivElement>('.cart-btn');

cartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cart.addToCart(button);
    const parent: HTMLDivElement = button.parentElement as HTMLDivElement;
    const img: HTMLImageElement = parent.querySelector('.product-img') as HTMLImageElement;
    console.log(img);
    if (button.classList.contains('added-to-cart')) {
      img.classList.add('grey');
      parent.style.background = '#d7d5d5';
    } else {
      img.classList.remove('grey');
      parent.style.background = '#ffffff';
    }
  });
});
