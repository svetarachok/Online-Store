export interface imageData {
  url: string;
}

export interface AttributesData {
  color: string;
  year: string;
  memory: string;
}

export interface ProductData {
  id: string;
  title: string;
  stock: string;
  price: string;
  brand: string;
  attributes: AttributesData;
  image: imageData;
}

export interface ProductsData {
  products: ProductData[];
}
