import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-voltican-edge',
  templateUrl: './voltican-edge.component.html',
  styleUrls: ['./voltican-edge.component.scss'],
})
export class VolticanEdgeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
