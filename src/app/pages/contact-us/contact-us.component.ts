import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  constructor() {}

  lat = 51.678418;
  lng = 7.809007;

  ngOnInit(): void {
    AOS.init();
  }
}
