import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
