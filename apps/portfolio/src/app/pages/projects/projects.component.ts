import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  constructor() {
    console.log('ProjectsComponent constructor');
    
   }

  ngOnInit(): void {
    console.log('ProjectsComponent ngOnInit');
  }

}
