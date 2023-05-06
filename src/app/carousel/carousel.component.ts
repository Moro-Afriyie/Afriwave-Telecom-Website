import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() headerInfo: any = [];

  selectedIndex = 0;

  constructor() {}

  ngOnInit(): void {
    // autoslide items
    setInterval(() => {
      this.onNextItem();
    }, 6000);
  }

  onNextItem() {
    if (this.selectedIndex === this.headerInfo.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex += 1;
    }
  }
}
