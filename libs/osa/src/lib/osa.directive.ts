import { AfterContentInit, ContentChildren, Directive, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { OsaItemDirective } from './osa-item.directive';

@Directive({
  selector: '[osa],[osa-container]'
})
export class OsaDirective implements OnInit, AfterContentInit {

  elementsList = [];

  osaContainer: HTMLElement | undefined;

  @ContentChildren(OsaItemDirective) elements: QueryList<OsaItemDirective> | undefined;

  constructor(
    public _el: ElementRef
  ) {
    console.log('osa constructor');

  }

  ngOnInit(): void {

    this.osaContainer = this._el.nativeElement;
    console.log('osa ngOnInit', this.osaContainer?.querySelectorAll('[osa-item]'));

  }

  ngAfterContentInit(): void {
    console.log('osa ngOnInit', this.elements?.first._el);
    // hide elements by adding class?

    //
    if (!!window.IntersectionObserver) {
      let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          const htmlElement = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            console.log(entry);
            htmlElement.style.transform = 'translateX(0)';
            // observer.unobserve(entry.target);
          } else {

            htmlElement.style.transform = 'translateX(-100%)';
            htmlElement.style.transition = 'all 2s';
          }
        });
      }, { rootMargin: "0px 0px -20px 0px" });
      this.elements?.forEach(element => { observer.observe(element._el.nativeElement) });
    }
  }


}
