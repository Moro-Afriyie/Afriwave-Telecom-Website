import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-our-experts',
  templateUrl: './our-experts.component.html',
  styleUrls: ['./our-experts.component.scss'],
})
export class OurExpertsComponent implements OnInit, AfterViewInit {
  modalStatus = false;
  constructor() {}

  ngOnInit(): void {}

  onShowExpert() {
    this.modalStatus = !this.modalStatus;
  }

  ngAfterViewInit(): void {
    AOS.init();
  }
}
