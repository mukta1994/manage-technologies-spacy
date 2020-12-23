import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTechComponent } from './view-tech.component';

describe('ViewTechComponent', () => {
  let component: ViewTechComponent;
  let fixture: ComponentFixture<ViewTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
