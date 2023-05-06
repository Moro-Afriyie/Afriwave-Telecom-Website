import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-carrers',
  templateUrl: './carrers.component.html',
  styleUrls: ['./carrers.component.scss'],
})
export class CarrersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
