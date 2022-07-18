export interface imageData {
  url: string;
}

export interface AttributesData {
  color: string;
  brand: string;
  memory: string;
}

export interface ProductData {
  id: string;
  title: string;
  stock: string;
  price: string;
  year: string;
  rated: string;
  attributes: AttributesData;
  image: imageData;
}

export interface ProductsData {
  products: ProductData[];
}
