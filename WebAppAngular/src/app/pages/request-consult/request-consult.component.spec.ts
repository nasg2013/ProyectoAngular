import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestConsultComponent } from './request-consult.component';

describe('RequestConsultComponent', () => {
  let component: RequestConsultComponent;
  let fixture: ComponentFixture<RequestConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
