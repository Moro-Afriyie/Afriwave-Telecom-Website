import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import { Slide } from 'src/app/@types';
import { AnimationType } from 'src/app/carousel/carousel.animations';
import { CarouselComponent } from 'src/app/carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(CarouselComponent) carousel: CarouselComponent =
    {} as CarouselComponent;

  animationType = AnimationType.Fade;

  // animationTypes = [
  //   {
  //     name: 'Scale',
  //     value: AnimationType.Scale,
  //   },
  //   {
  //     name: 'Fade',
  //     value: AnimationType.Fade,
  //   },
  //   {
  //     name: 'Flip',
  //     value: AnimationType.Flip,
  //   },
  //   {
  //     name: 'Jack In The Box',
  //     value: AnimationType.JackInTheBox,
  //   },
  // ];
  slides: Slide[] = [
    {
      title: 'Interconnect ClearingHouse (ICH)',
      info: 'In 2015, Afriwave Telecom Ghana Limited secured the license from the Government of Ghana through the National Communications Authority to build and operate facilities for the provision and operation of ClearingHouse services, pursuant to the provisions of National Communications Act, 2008 (Act,769)',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/afriwave-telecom-site-rebuild.appspot.com/o/banner3.jpg?alt=media&token=b8aafd8a-94de-4c9f-aa27-2182377e99ba',
      link: '',
    },
    {
      title: 'Traffic Routing',
      info: `Afriwave Telecom, an authorized ICH operator approved by the NCA, plays a pivotal role in streamlining the routing of National and International Interconnect Traffic, ensuring transparent reconciliation and centralized connectivity across Ghana's communication landscape`,
      imageUrl:
        'https://res.cloudinary.com/moroafriyie/image/upload/v1683477445/my%20uploads/ssh2xnsjzq6l8zqxjwhf.jpg',
      link: '',
    },
    // {
    //   title: 'SMS Service',
    //   info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi nobis quis accusantium, dolore esse nostrum eius odit veritatis repellat fugit cum praesentium qui impedit, laboriosam voluptatum illo, itaque totam distinctio!',
    //   imageUrl: 'https://www.afriwavetelecom.com/img/banner2.jpg',
    //   link: '',
    // },
    {
      title: 'Data Center Services',
      info: 'Afriwave Telecom Ghana Limited and Onix Data Center have entered into a reselling Agreement pursuant to the resale of Onix Data Center colocation services. As a Tier IV enterprise class facility, which is the highest level for a Data Center, Onix offers a stable, reliable, and uninterrupted service with an annual expected uptime of 99.995%.',
      link: '',
      imageUrl:
        'https://firebasestorage.googleapis.com/v0/b/afriwave-telecom-site-rebuild.appspot.com/o/AdobeStock_350459236-WEBISTE.jpg?alt=media&token=7b64dc20-de2a-43bd-b7ba-825e083effc4',
    },
  ];

  selectedIndex = 0;
  smsServices = `Experience the ultimate convenience with our ICH SMS solution, offering a single point of entry to all MNOs (Mobile Network Operators)
Streamline your operations and effortlessly deliver both A2P and P2P SMS services through our integrated platform.
From seamless messaging to expanded coverage and transparent billing, revolutionise your communication strategy with ease. Join us in unlocking the true power of SMS and gain a competitive edge in the market. Partner with us today for simplified access and unparalleled opportunities in the VAS landscape…
`;

  ich = `In 2015, Afriwave Telecom Ghana Limited secured the license from the Government of Ghana through the National Communications Authority to build and operate facilities for the provision and operation of ClearingHouse services, pursuant to the provisions of National Communications Act, 2008 (Act,769)`;
  trafficRouting = `Afriwave Telecom, an authorized ICH operator approved by the NCA, plays a pivotal role in streamlining the routing of National and International Interconnect Traffic, ensuring transparent reconciliation and centralized connectivity across Ghana's communication landscape`;
  dataCenters = `Afriwave Telecom Ghana Limited and Onix Data Center have entered into a reselling Agreement pursuant to the resale of Onix Data Center colocation services. As a Tier IV enterprise class facility, which is the highest level for a Data Center, Onix offers a stable, reliable, and uninterrupted service with an annual expected uptime of 99.995%.`;

  constructor() {}

  ngOnInit(): void {
    AOS.init();
    // autoslide items
    setInterval(() => {
      this.carousel.onNextClick();
    }, 12000);
  }

  setAnimationType(type: any) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }

  ngAfterViewInit(): void {
    // AOS.init();
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }
}
