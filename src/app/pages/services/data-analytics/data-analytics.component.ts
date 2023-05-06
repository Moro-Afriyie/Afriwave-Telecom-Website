import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-data-analytics',
  templateUrl: './data-analytics.component.html',
  styleUrls: ['./data-analytics.component.scss'],
})
export class DataAnalyticsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
