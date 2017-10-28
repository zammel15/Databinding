import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcvComponent } from './listcv.component';

describe('ListcvComponent', () => {
  let component: ListcvComponent;
  let fixture: ComponentFixture<ListcvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
