import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-big-data',
  templateUrl: './big-data.component.html',
  styleUrls: ['./big-data.component.scss'],
})
export class BigDataComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
