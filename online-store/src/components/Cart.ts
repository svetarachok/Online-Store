interface CartInterface {
  addToCart(product: HTMLElement): void;
  restrictCartItemsQuantity(counter: number): void;
}

export class Cart implements CartInterface {
  static counter: number = 0;

  addToCart(cardBtn: HTMLElement): void {
    const counterElem: HTMLDivElement = document.querySelector('.product-in-cart-count') as HTMLDivElement;
    const counterElemData = Number(counterElem.innerHTML);
    if (counterElemData === 0) {
      Cart.counter++;
      counterElem.innerHTML = String(Cart.counter);
      cardBtn.classList.add('added-to-cart');
    } else if (counterElemData >= 1 && counterElemData < 20 && !cardBtn.classList.contains('added-to-cart')) {
      Cart.counter += 1;
      counterElem.innerHTML = String(Cart.counter);
      cardBtn.classList.add('added-to-cart');
    } else if (counterElemData >= 1 && counterElemData < 20 && cardBtn.classList.contains('added-to-cart')) {
      Cart.counter -= 1;
      counterElem.innerHTML = String(Cart.counter);
      cardBtn.classList.remove('added-to-cart');
    } else {
      this.restrictCartItemsQuantity(Cart.counter);
      if (cardBtn.classList.contains('added-to-cart')) {
        cardBtn.classList.remove('added-to-cart');
        Cart.counter -= 1;
        counterElem.innerHTML = String(Cart.counter);
        const warningContainer: HTMLParagraphElement = document.querySelector('.warning-cart') as HTMLParagraphElement;
        warningContainer.innerHTML = '';
      }
    }
  }

  restrictCartItemsQuantity(counter: number): void {
    const warningContainer: HTMLParagraphElement = document.querySelector('.warning-cart') as HTMLParagraphElement;
    warningContainer.style.fontSize = `${18}px`;
    warningContainer.style.fontWeight = '600';
    warningContainer.style.color = 'red';
    counter >= 20 ? (warningContainer.innerHTML = 'Sorry, all slots are full') : (warningContainer.innerHTML = '');
  }
}
