import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchupSelectedplayersComponent } from './matchup-selectedplayers.component';

describe('MatchupSelectedplayersComponent', () => {
  let component: MatchupSelectedplayersComponent;
  let fixture: ComponentFixture<MatchupSelectedplayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchupSelectedplayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchupSelectedplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
