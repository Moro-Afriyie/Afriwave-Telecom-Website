import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-telecomunications-network',
  templateUrl: './telecomunications-network.component.html',
  styleUrls: ['./telecomunications-network.component.scss'],
})
export class TelecomunicationsNetworkComponent
  implements OnInit, AfterViewInit
{
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    AOS.init();
  }
}
