import { ProductData } from '../Data/data-interfaces';

export class Filter {
  static colorArr: string[] = [];
  static brandArr: string[] = [];
  static memoryArr: string[] = [];

  constructor(public products: ProductData[], public filteredProducts: ProductData[]) {
    this.products = products;
    this.filteredProducts = [];
  }

  filterByColor(product: ProductData, color: string) {
    if (product.attributes.color === color) {
      this.filteredProducts.push(product);
    }
  }

  filterByBrand(product: ProductData, brand: string) {
    if (product.attributes.brand === brand) {
      this.filteredProducts.push(product);
    }
  }

  filterByMemory(product: ProductData, memory: string) {
    if (product.attributes.memory === memory) {
      this.filteredProducts.push(product);
    }
  }

  getCurrenFilterData(inputData: string) {
    const colors: string[] = [];
    const brands: string[] = [];
    const memory: string[] = [];

    for (const product of this.products) {
      colors.push(product.attributes.color);
      brands.push(product.attributes.brand);
      memory.push(product.attributes.memory);
    }

    this.products.forEach((product) => {
      if (colors.includes(product.attributes.color) && product.attributes.color === inputData) {
        Filter.colorArr.push(inputData);
      }
      if (colors.includes(product.attributes.brand) && product.attributes.brand === inputData) {
        Filter.brandArr.push(inputData);
      }
      if (colors.includes(product.attributes.memory) && product.attributes.memory === inputData) {
        Filter.memoryArr.push(inputData);
      }
    });
  }

  filterAll(inputData: string) {
    this.getCurrenFilterData(inputData);
    [...this.products].filter((product) => {
      console.log(product);
    });
  }
}
