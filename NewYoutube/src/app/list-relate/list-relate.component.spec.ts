import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRelateComponent } from './list-relate.component';

describe('ListRelateComponent', () => {
  let component: ListRelateComponent;
  let fixture: ComponentFixture<ListRelateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRelateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRelateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
