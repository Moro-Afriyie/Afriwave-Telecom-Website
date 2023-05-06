import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-data-science',
  templateUrl: './data-science.component.html',
  styleUrls: ['./data-science.component.scss'],
})
export class DataScienceComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
