import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() players;
  @Output() selectedPlayer: EventEmitter<any> = new EventEmitter();

  filteredPlayers: Observable<any[]>;
  playerCtrl: FormControl;

  constructor() {
  
  }

  ngOnInit() {
  }

}
