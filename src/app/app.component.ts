import { Component, OnInit } from '@angular/core';
import { NBA } from './models/nba.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nba$: NBA[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getUsers()
      .subscribe(data => this.nba$ = data);
  }
}

