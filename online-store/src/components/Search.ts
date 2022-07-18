export class Search {
  constructor(public selector: HTMLInputElement) {
    this.selector = selector;
  }

  handleSearch(selector: HTMLInputElement, searchDataClass: string, searchWithin: string) {
    selector = this.selector;
    const cards: HTMLDivElement[] = [...document.querySelectorAll<HTMLDivElement>(searchDataClass)];
    selector.addEventListener('keyup', (e: Event) => {
      const target = e.target as HTMLInputElement;
      cards.map((card: HTMLDivElement) => {
        const title = card.querySelector(searchWithin);
        if (title?.innerHTML.toLowerCase().includes(target.value.toLowerCase())) {
          card.classList.remove('hidden-search');
        } else {
          card.classList.add('hidden-search');
        }
      });
    });
    selector.addEventListener('search', (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.value === '') {
        cards.map((card) => {
          card.classList.remove('hidden-search');
        });
      }
    });
  }
}
