import * as AOS from 'aos';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-clientele',
  templateUrl: './clientele.component.html',
  styleUrls: ['./clientele.component.scss'],
})
export class ClienteleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
