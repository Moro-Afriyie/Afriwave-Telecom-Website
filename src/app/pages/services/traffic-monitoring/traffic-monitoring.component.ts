import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-traffic-monitoring',
  templateUrl: './traffic-monitoring.component.html',
  styleUrls: ['./traffic-monitoring.component.scss'],
})
export class TrafficMonitoringComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
