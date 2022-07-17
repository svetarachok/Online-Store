import { ProductData } from '../Data/data-interfaces';

export interface IDataRenderToPage {
  products: ProductData[];
  displayCards(data: ProductData[]): HTMLElement;
  updateCards(data: ProductData[]): ProductData[];
}
export class ProductsUI implements IDataRenderToPage {
  constructor(public products: ProductData[]) {
    this.products = products;
  }

  displayCards(products: ProductData[]): HTMLElement {
    const result = document.createElement('section') as HTMLElement;
    result.classList.add('products');

    products.forEach((product: ProductData) => {
      const card: HTMLElement = document.createElement('div') as HTMLElement;
      card.classList.add('product');
      card.setAttribute('id', `${product.id}`);

      const img: HTMLImageElement = document.createElement('img') as HTMLImageElement;
      img.classList.add('product-img');
      img.src = `${product.image.url}`;

      const description = document.createElement('div') as HTMLDivElement;
      description.classList.add('product__description');

      const brand = document.createElement('p') as HTMLParagraphElement;
      brand.classList.add('product-brand');
      brand.innerHTML = `${product.attributes.brand}`;

      const title = document.createElement('h3') as HTMLHeadingElement;
      title.classList.add('product-title');
      title.innerHTML = `${product.title}`;

      const attributes = document.createElement('div') as HTMLDivElement;
      attributes.classList.add('product-attributes');

      const color = document.createElement('p') as HTMLParagraphElement;
      color.classList.add('product-attribute');
      color.classList.add('product-color-attibute');
      color.innerHTML = `Color: ${product.attributes.color}`;

      const year = document.createElement('p') as HTMLParagraphElement;
      year.classList.add('product-attribute');
      year.classList.add('product-year-attribute');
      year.innerHTML = `Year: <span class="year-number">${product.year}</span>`;

      const memory = document.createElement('p') as HTMLParagraphElement;
      memory.classList.add('product-attribute');
      memory.classList.add('product-memory-size-attribute');
      memory.innerHTML = `${product.attributes.memory}GB`;

      const info = document.createElement('div') as HTMLDivElement;
      info.classList.add('product-info');

      const price = document.createElement('div') as HTMLDivElement;
      price.classList.add('product-price');
      price.innerHTML = `$${product.price}`;

      const inStock = document.createElement('div') as HTMLDivElement;
      inStock.classList.add('product-in-stock');
      inStock.innerHTML = `In stock: <span class="instock-number">${product.stock}</span>`;

      const cartButton = document.createElement('div') as HTMLDivElement;
      cartButton.classList.add('cart-btn');
      cartButton.innerHTML = `<img class = "cart-icon" src = "./img/cartv.png">`;

      attributes.append(color, year, memory);
      info.append(price, inStock);
      description.append(brand, title, attributes, info);

      card.append(img, description, cartButton);
      result.append(card);
    });

    return result;
  }

  updateCards(updatedProducts: ProductData[]) {
    this.products = updatedProducts;
    return this.products;
  }
}
