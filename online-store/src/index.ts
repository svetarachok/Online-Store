import './global.css';
import { ProductsUI } from './components/UI/ProductsUI';
import { products } from './components/Data/productsData';
import { AttributesFilter } from './components/Filters/AttributesFilter';
import { Cart } from './components/Cart';
import * as noUiSlider from 'nouislider';
import { RangeFilters } from './components/Filters/RangeFilters';
import { Sort } from './components/Sort/Sort';
import { Search } from './components/Search';

const cardsSection: HTMLElement = document.querySelector('.products__section') as HTMLElement;
const stockRangeFilter = document.getElementById('stock-filter-slider') as noUiSlider.target;
const yearRangeFilter = document.getElementById('year-filter-slider') as noUiSlider.target;
const colorFilterInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>('.color');
const brandFilterInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>('.brand');
const memoryFilterInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll<HTMLInputElement>('.memory');

const cardsData = new ProductsUI(products);
const attributesFilter = new AttributesFilter(products, []);

//render products data to Cards

let cards = cardsData.displayCards(products);
cardsSection.append(cards);

// Attributes filters
[...colorFilterInputs, ...brandFilterInputs, ...memoryFilterInputs].forEach((input) => {
  input.addEventListener('change', (e: Event) => {
    e.preventDefault();
    if (input.checked) {
      attributesFilter.add(String(input.value));
    } else {
      attributesFilter.remove(String(input.value));
    }
    const filtered = attributesFilter.filterProducts();
    cards = cardsData.displayCards(filtered);
    cardsSection.innerHTML = '';
    cardsSection.append(cards);
  });
});

//Add to cart
const cart = new Cart();
const cartButtons: NodeListOf<HTMLDivElement> = document.querySelectorAll<HTMLDivElement>('.cart-btn');

cartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cart.addToCart(button);
    const parent: HTMLDivElement = button.parentElement as HTMLDivElement;
    const img: HTMLImageElement = parent.querySelector('.product-img') as HTMLImageElement;
    if (button.classList.contains('added-to-cart')) {
      img.classList.add('grey');
      parent.style.background = '#d7d5d5';
    } else {
      img.classList.remove('grey');
      parent.style.background = '#ffffff';
    }
  });
});

// Range filters

const stockFilter = new RangeFilters();
stockFilter.createRangeFilter(products, '#stock-filter', stockRangeFilter, 'stock');
stockFilter.handleRangeEvents(stockRangeFilter, '.instock-number');

const yearFilter = new RangeFilters();
yearFilter.createRangeFilter(products, '#year-filter', yearRangeFilter, 'year');
yearFilter.handleRangeEvents(yearRangeFilter, '.year-number');

// Sorting

const sortingList: HTMLSelectElement = document.querySelector('.sort-order') as HTMLSelectElement;
const sort = new Sort();
sortingList.addEventListener('change', (e) => {
  const target = e.target as HTMLInputElement;
  if (target.value === 'title-ascending') {
    sort.ascSort('.product-title');
  } else if (target.value === 'title-descending') {
    sort.descSort('.product-title');
  } else if (target.value === 'year-ascending') {
    sort.ascSort('.product-year-attribute');
  } else if (target.value === 'year-descending') {
    sort.descSort('.product-year-attribute');
  }
});

// Clear filters

const clearButton: HTMLButtonElement = document.querySelector('.clear-filters') as HTMLButtonElement;
clearButton.addEventListener('click', () => {
  const AttributeFilters: HTMLInputElement[] = [
    ...document.querySelectorAll<HTMLInputElement>('.checkbox-input input'),
  ];
  AttributeFilters.forEach((checkbox) => (checkbox.checked = false));
});

// Search

const searchInput: HTMLInputElement = document.querySelector('#search') as HTMLInputElement;
const search = new Search(searchInput);
search.handleSearch(searchInput, '.product', '.product-title');
