export class Sort {
  // public sortingList: HTMLSelectElement[];
  // constructor(sortingList: HTMLSelectElement[]) {
  //   this.sortingList = sortingList;
  // }

  public ascSort(selector: string) {
    const productsList: HTMLElement[] = [...document.querySelectorAll<HTMLElement>('.product')];
    const parent: HTMLElement = document.querySelector('.products') as HTMLElement;
    const sorted = productsList.sort((a: HTMLElement, b: HTMLElement) => {
      const aData: HTMLElement = a.querySelector(selector) as HTMLElement;
      const bData: HTMLElement = b.querySelector(selector) as HTMLElement;
      if (Number(aData.innerHTML) && Number(bData.innerHTML)) {
        return Number(aData.innerHTML) - Number(bData.innerHTML);
      } else {
        return aData.innerHTML.localeCompare(bData.innerHTML);
      }
    });
    parent.innerHTML = '';
    sorted.forEach((item) => {
      parent.appendChild(item);
    });
  }

  public descSort(selector: string) {
    const productsList: HTMLElement[] = [...document.querySelectorAll<HTMLElement>('.product')];
    const parent: HTMLElement = document.querySelector('.products') as HTMLElement;
    const sorted = productsList.sort((a: HTMLElement, b: HTMLElement) => {
      const aData: HTMLElement = a.querySelector(selector) as HTMLElement;
      const bData: HTMLElement = b.querySelector(selector) as HTMLElement;
      if (Number(aData.innerHTML) && Number(bData.innerHTML)) {
        return Number(bData.innerHTML) - Number(aData.innerHTML);
      } else {
        return bData.innerHTML.localeCompare(aData.innerHTML);
      }
    });
    parent.innerHTML = '';
    sorted.forEach((item) => {
      parent.appendChild(item);
    });
  }
}
