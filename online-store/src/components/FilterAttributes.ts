import { ProductData, AttributesData } from './Data/data-interfaces';

export class FilterAttributes {
  constructor(public color: string[] = []) {
    this.color = color;
  }

  add(newColor: string): void {
    this.color.push(newColor);
  }

  check(product: ProductData): boolean {
    const attributes: AttributesData = product.attributes;
    if (this.color.length !== 0) {
      if (!this.color.includes(attributes.color)) {
        return false;
      }
    }
    return true;
  }

  filterProducts(products: ProductData[]): ProductData[] {
    const result: ProductData[] = [];
    for (const product of products) {
      if (this.check(product)) {
        result.push(product);
      }
    }
    return result;
  }
}
