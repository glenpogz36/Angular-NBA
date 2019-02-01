import { Component, OnInit, Input } from '@angular/core';
import { Functions } from '../../shared/functions';

/** SERVICES */
import { GamesService } from '../nba.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  todaysDate;
  yesterdaysDate;

  constructor(
    private gamesService: GamesService
  ) {
    this.todaysDate = Functions.getTodaysDateString();
    this.yesterdaysDate = Functions.getYesterdaysDateString();
  }

  ngOnInit() {
  }

}
