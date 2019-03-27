import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMessageDetailComponent } from './table-message-detail.component';

describe('TableMessageDetailComponent', () => {
  let component: TableMessageDetailComponent;
  let fixture: ComponentFixture<TableMessageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMessageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMessageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
