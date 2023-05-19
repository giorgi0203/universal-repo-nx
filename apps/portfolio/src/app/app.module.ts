import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, ProjectsComponent, NavbarComponent],
  imports: [BrowserModule, routing,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
