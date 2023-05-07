import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-ich',
  templateUrl: './ich.component.html',
  styleUrls: ['./ich.component.scss'],
})
export class IchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
