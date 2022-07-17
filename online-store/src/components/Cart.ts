interface CartInterface {
  addToCart(product: HTMLElement): void;
}

export class Cart implements CartInterface {
  static counter: number = 0;

  addToCart(cardBtn: HTMLElement): number {
    const counterElem: HTMLDivElement = document.querySelector('.product-in-cart-count') as HTMLDivElement;
    const counterElemData = Number(counterElem.innerHTML);
    if (counterElemData === 0) {
      Cart.counter++;
      counterElem.innerHTML = String(Cart.counter);
      cardBtn.classList.add('added-to-cart');
    } else if (counterElemData >= 1 && counterElemData <= 20 && !cardBtn.classList.contains('added-to-cart')) {
      Cart.counter += 1;
      counterElem.innerHTML = String(Cart.counter);
      cardBtn.classList.add('added-to-cart');
    } else if (counterElemData >= 1 && counterElemData <= 20 && cardBtn.classList.contains('added-to-cart')) {
      Cart.counter -= 1;
      counterElem.innerHTML = String(Cart.counter);
      cardBtn.classList.remove('added-to-cart');
    }
    return Cart.counter;
  }
}
