import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private httpClient: HttpClient) {}

  getProjects() {
    return this.httpClient.get('assets/data/projects.json');
  }
}
