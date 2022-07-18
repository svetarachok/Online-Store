import { ProductData, AttributesData } from '../Data/data-interfaces';

export class AttributesFilter {
  constructor(public products: ProductData[], public filteredValue: string[] = []) {
    this.products = products;
    this.filteredValue = filteredValue;
  }

  public add(newValue: string): void {
    this.filteredValue.push(newValue);
  }

  public remove(newValue: string) {
    this.filteredValue = this.filteredValue.filter((removeColor) => removeColor !== newValue);
    return this.filteredValue;
  }

  protected check(product: ProductData): boolean {
    const attributes: AttributesData = product.attributes;
    if (this.filteredValue.length !== 0) {
      for (const value of Object.values(attributes)) {
        if (this.filteredValue.indexOf(value.toLowerCase()) != -1) {
          return true;
        }
      }
    }
    return false;
  }

  public filterProducts(): ProductData[] {
    const result: ProductData[] = [];
    for (const product of this.products) {
      if (this.check(product)) {
        result.push(product);
      }
    }
    if (result.length === 0) {
      return this.products;
    } else {
      return result;
    }
  }
}
