import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsaDemoComponent } from './osa-demo.component';

describe('OsaDemoComponent', () => {
  let component: OsaDemoComponent;
  let fixture: ComponentFixture<OsaDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsaDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsaDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
