import { Component, OnInit, Renderer2 } from '@angular/core';
import { ProjectsService } from './services/projects.service';
import { delay } from 'rxjs';

@Component({
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  errorFetchingProjects = false;

  constructor(
    private r2: Renderer2,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    console.log('AppComponent.ngOnInit()');
  }

  getProjects() {
    this.projectsService.getProjects().subscribe((data) => {
      if (data!=null) {
        console.log('AppComponent.getProjects()');
        console.log(data);
      }else{
        console.log('AppComponent.getProjects()');
        console.log('data is null');
        this.errorFetchingProjects = true;
      }
    });
  }
}
