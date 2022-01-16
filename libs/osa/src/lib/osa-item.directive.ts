import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[osa-item]'
})
export class OsaItemDirective {

  constructor(
    public _el: ElementRef
  ) { }

}
