import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-data-centers',
  templateUrl: './data-centers.component.html',
  styleUrls: ['./data-centers.component.scss'],
})
export class DataCentersComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    AOS.init();
  }
}
