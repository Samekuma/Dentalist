import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPriorityComponent } from './our-priority.component';

describe('OurPriorityComponent', () => {
  let component: OurPriorityComponent;
  let fixture: ComponentFixture<OurPriorityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurPriorityComponent]
    });
    fixture = TestBed.createComponent(OurPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
