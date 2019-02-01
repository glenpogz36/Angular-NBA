import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupCompareComponent } from './matchup-compare.component';

describe('MatchupCompareComponent', () => {
  let component: MatchupCompareComponent;
  let fixture: ComponentFixture<MatchupCompareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchupCompareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
