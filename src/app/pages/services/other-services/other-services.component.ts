import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-other-services',
  templateUrl: './other-services.component.html',
  styleUrls: ['./other-services.component.scss'],
})
export class OtherServicesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
