import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'universal-repo-nx-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'portfolio';


  constructor(private r2: Renderer2) {
  }

  ngOnInit(): void {
    console.log('AppComponent.ngOnInit()');

  }


}
