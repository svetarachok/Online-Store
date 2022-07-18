interface RatedClass {
  selector: string;
  handleClick(): void;
  resetRated(): void;
}

export class Rated implements RatedClass {
  element: HTMLInputElement;
  constructor(public selector: string) {
    this.element = <HTMLInputElement>document.getElementById(selector);
    this.setup();
  }

  private setup() {
    this.handleClick = this.handleClick.bind(this);
    this.element.addEventListener('click', this.handleClick);
  }

  public handleClick() {
    const cards = document.querySelectorAll('.product');
    if (this.element.checked) {
      cards.forEach((card) => {
        if (!card.querySelector('.rated-label')) {
          card.classList.add('hidden');
        }
      });
    } else {
      cards.forEach((card) => {
        if (!card.querySelector('.rated-label')) {
          card.classList.remove('hidden');
        }
      });
    }
  }

  resetRated() {
    const cards = document.querySelectorAll('.product');
    cards.forEach((card) => {
      card.classList.remove('hidden');
    });
    this.element.checked = false;
  }
}
