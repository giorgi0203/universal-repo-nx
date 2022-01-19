import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[aosa-item]'
})
export class AosaItemDirective {

  constructor(
    public _el: ElementRef
  ) { }

}
