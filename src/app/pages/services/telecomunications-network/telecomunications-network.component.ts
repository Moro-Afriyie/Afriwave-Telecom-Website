import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-telecomunications-network',
  templateUrl: './telecomunications-network.component.html',
  styleUrls: ['./telecomunications-network.component.scss'],
})
export class TelecomunicationsNetworkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
