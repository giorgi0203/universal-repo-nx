import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'universal-repo-nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  scrollElements!: NodeListOf<HTMLElement>;
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    this.handleScrollAnimation();
  }
  constructor(private r2: Renderer2) {
  }

  ngOnInit(): void {
    this.scrollElements = document.querySelectorAll<HTMLElement>(".fade-in-bottom");
    this.scrollElements.forEach((el) => {
      el.style.opacity = '0';
    })
  }

  inView(el: HTMLElement, percentageScroll = 100) {

    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
    );

  }

  displayScrollElement(element: HTMLElement) {
    element.classList.add("scrolled");
  };

  hideScrollElement(element: HTMLElement) {
    element.classList.remove("scrolled");
  };

  handleScrollAnimation() {
    this.scrollElements.forEach((el) => {
      if (this.inView(el, 100)) {
        this.displayScrollElement(el);
      } else {
        this.hideScrollElement(el);
      }
    })
  }

  /**
 * initializes test component
 * @example
 * @param1 param 1 is function parama
 * @returns `string`
 */
  initTestComponent() {
    return '';
  }
}
