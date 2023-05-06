import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  headerInfo = [
    {
      title: 'Data Analytics & Modern BI ',
      info: 'The insights that can be drawn from good analytics will help your business to properly understand industry and market data and place you in a better position ',
      link: '/services/data-analytics',
    },
    {
      title: 'Big Data Engineering',
      info: 'We employ cost-effective, innovative forms of information processing for enhanced insight and decision-making.',
      link: '/services/big-data-and-engineering',
    },
    {
      title: 'Strategy & Architecture ',
      info: 'Following widely accepted and proven data strategy standards, Voltican has put together custom strategies for various companies that address your specific organizational needs',
      link: '/services/strategy-and-architecture',
    },
    {
      title: ' Data Science & ML ',
      info: 'At Voltican, we help your company employ the best tools and technology for the application of AI and ML in your business processes',
      link: '/services/data-science',
    },
  ];

  selectedIndex = 0;

  constructor() {}

  ngOnInit(): void {
    AOS.init();
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
