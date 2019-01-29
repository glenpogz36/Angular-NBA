import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';




import { HomeService } from './home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  // Subscriptions
  subscription: Subscription[] = [];
  todaysDate;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {


  }


  ngOnDestroy() {
    for (const sub of this.subscription) {
      sub.unsubscribe();
    }
  }

}
