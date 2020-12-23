import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChunksInfoComponent } from './chunks-info.component';

describe('ChunksInfoComponent', () => {
  let component: ChunksInfoComponent;
  let fixture: ComponentFixture<ChunksInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChunksInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChunksInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
