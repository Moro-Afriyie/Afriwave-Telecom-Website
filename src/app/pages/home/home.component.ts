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
      title: 'Interconnect Clearing House (ICH)',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi nobis quis accusantium, dolore esse nostrum eius odit veritatis repellat fugit cum praesentium qui impedit, laboriosam voluptatum illo, itaque totam distinctio!',
      imageUrl: 'https://www.afriwavetelecom.com/img/banner3.jpg',
      link: '',
    },
    {
      title: 'Traffic Monitoring',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi nobis quis accusantium, dolore esse nostrum eius odit veritatis repellat fugit cum praesentium qui impedit, laboriosam voluptatum illo, itaque totam distinctio!',
      imageUrl:
        'https://res.cloudinary.com/moroafriyie/image/upload/v1683477445/my%20uploads/ssh2xnsjzq6l8zqxjwhf.jpg',
      link: '',
    },
    {
      title: 'Telecommunication Networks',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi nobis quis accusantium, dolore esse nostrum eius odit veritatis repellat fugit cum praesentium qui impedit, laboriosam voluptatum illo, itaque totam distinctio!',
      imageUrl: 'https://www.afriwavetelecom.com/img/banner2.jpg',
      link: '',
    },
    {
      title: 'Data Centers',
      info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi nobis quis accusantium, dolore esse nostrum eius odit veritatis repellat fugit cum praesentium qui impedit, laboriosam voluptatum illo, itaque totam distinctio!',
      link: '',
      imageUrl:
        'https://www.intelligentdatacentres.com/wp-content/uploads/sites/34/2020/08/AdobeStock_350459236-WEBISTE.jpg',
    },
  ];

  selectedIndex = 0;

  constructor() {}

  ngOnInit(): void {
    // autoslide items
    setInterval(() => {
      this.carousel.onNextClick();
    }, 6000);
  }

  setAnimationType(type: any) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }

  ngAfterViewInit(): void {
    AOS.init();
  }
}
