import 'nouislider/dist/nouislider.css';
import * as noUiSlider from 'nouislider';
import { ProductData } from '../Data/data-interfaces';
export class RangeFilters {
  createRangeFilter(
    products: ProductData[],
    filterDivID: string,
    filterElem: noUiSlider.target,
    value: keyof ProductData
  ) {
    const minRange: number = this.findMinRange(products, value);
    const maxRange: number = this.findMaxRange(products, value);
    const rangeDiv: HTMLDivElement = document.querySelector(filterDivID) as HTMLDivElement;
    const input0: HTMLInputElement = rangeDiv.querySelector('#input0') as HTMLInputElement;
    const input1: HTMLInputElement = rangeDiv.querySelector('#input1') as HTMLInputElement;

    if (!filterElem || !input0 || !input1) return;

    noUiSlider.create(filterElem, {
      start: [minRange, maxRange],
      connect: true,
      step: 1,
      range: {
        min: minRange,
        max: maxRange,
      },
    });

    input0.value = this.findMinRange(products, value).toString();
    input1.value = this.findMaxRange(products, value).toString();
    const inputs: [HTMLInputElement, HTMLInputElement] = [input0, input1];

    filterElem.noUiSlider?.on('change', (values, handle: number) => {
      inputs[handle].value = Math.round(+values[handle]).toString();
    });

    input0.addEventListener('change', function () {
      filterElem.noUiSlider?.set([this.value, input1.value]);
    });

    input1.addEventListener('change', function () {
      filterElem.noUiSlider?.set([input0.value, this.value]);
    });
  }

  public handleRangeEvents(filterElem: noUiSlider.target, dataSelector: string) {
    filterElem.noUiSlider?.on('change', (values) => {
      const [minValue, maxValue]: (string | number)[] = values;
      const allProducts = document.querySelectorAll('.product');
      allProducts.forEach((product) => {
        const data = product.querySelector(dataSelector)?.innerHTML;
        const dataNumber = Number(data);
        if (dataNumber < Math.round(Number(minValue)) || dataNumber > Math.round(Number(maxValue))) {
          product.classList.add('hidden');
        } else {
          product.classList.remove('hidden');
        }
      });
    });
  }

  private findMinRange(products: ProductData[], searchValue: keyof ProductData) {
    const sortedProducts: ProductData[] = products.sort((a, b): number => {
      if (Number(a[searchValue]) > Number(b[searchValue])) {
        return 1;
      }
      if (Number(a[searchValue]) < Number(b[searchValue])) {
        return -1;
      }
      return 0;
    });
    const minProduct = sortedProducts[0];
    const number = minProduct[searchValue];
    return Number(number);
  }

  private findMaxRange(products: ProductData[], searchValue: keyof ProductData) {
    const sortedProducts: ProductData[] = products.sort((a, b): number => {
      if (Number(a[searchValue]) < Number(b[searchValue])) {
        return 1;
      }
      if (Number(a[searchValue]) > Number(b[searchValue])) {
        return -1;
      }
      return 0;
    });
    const maxProduct = sortedProducts[0];
    const number = maxProduct[searchValue];
    return Number(number);
  }
  resetRangeFilter(filterElem: noUiSlider.target) {
    filterElem.noUiSlider?.reset();
  }
}
