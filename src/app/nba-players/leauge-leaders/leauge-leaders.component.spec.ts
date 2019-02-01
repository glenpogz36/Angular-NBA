import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaugeLeadersComponent } from './leauge-leaders.component';

describe('LeaugeLeadersComponent', () => {
  let component: LeaugeLeadersComponent;
  let fixture: ComponentFixture<LeaugeLeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaugeLeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaugeLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
