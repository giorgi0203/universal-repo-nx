import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './about.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  constructor() {
    console.log('AboutComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('AboutComponent.ngOnInit()');

  }

}
