import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LescvComponent } from './lescv.component';

describe('LescvComponent', () => {
  let component: LescvComponent;
  let fixture: ComponentFixture<LescvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LescvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LescvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
