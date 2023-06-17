import { TestBed } from '@angular/core/testing';
import { MockBuilder } from 'ng-mocks';
import { EMPTY, Subject } from 'rxjs';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ProjectsService } from './services/projects.service';

describe('AppComponent', () => {
  const projects$: Subject<{ id: number }[] | null> = new Subject();
  beforeEach(() =>
    MockBuilder(AppComponent, AppModule).mock(ProjectsService, {
      getProjects: () => projects$ as any,
    })
  );

  afterAll(() => {
    projects$.complete();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'portfolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('portfolio');
  });

  it(`should fetch projects and set errorFetchingProjects false if data is null`, async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.getProjects();
    projects$.next(null);
    await new Promise((resolve) => setTimeout(resolve, 1));
    await fixture.whenStable();
    expect(app.errorFetchingProjects).toBe(true);
  });
});
