import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, ProjectsComponent],
  imports: [BrowserModule, routing],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
