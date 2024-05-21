import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalTeamComponent } from './dental-team.component';

describe('DentalTeamComponent', () => {
  let component: DentalTeamComponent;
  let fixture: ComponentFixture<DentalTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DentalTeamComponent]
    });
    fixture = TestBed.createComponent(DentalTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
