import 'nouislider/dist/nouislider.css';
import * as noUiSlider from 'nouislider';
import { ProductData } from './data-interfaces';

export class RangeFilters {

  createRangeFilter(data: ProductData[], key: keyof ProductData) {

    const attributes: keyof ProductData = data.map((item: ProductData) => item[key])
    const range = 
    
  }

}

const priceSlider = document.getElementById('stock-filter') as noUiSlider.target;

noUiSlider.create(priceSlider, {
  start: [0, 500],
  snap: true,
  connect: true,
  range: {
    min: 0,
    '10%': 50,
    '20%': 100,
    '30%': 150,
    '40%': 500,
    '50%': 800,
    max: 1000,
  },
});
