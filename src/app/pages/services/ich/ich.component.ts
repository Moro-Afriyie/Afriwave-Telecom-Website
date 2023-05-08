import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-ich',
  templateUrl: './ich.component.html',
  styleUrls: ['./ich.component.scss'],
})
export class IchComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    AOS.init();
  }
}
