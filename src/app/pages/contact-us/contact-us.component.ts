import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit, AfterViewInit {
  constructor() {}

  lat = 51.678418;
  lng = 7.809007;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    AOS.init();
  }
}
