import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images = [
    'https://www.afriwavetelecom.com/index_files/vlb_images1/ep1.JPG',
    'https://www.afriwavetelecom.com/index_files/vlb_images1/ep2.JPG',
    'https://www.afriwavetelecom.com/index_files/vlb_images1/ep3.JPG',
    'https://www.afriwavetelecom.com/index_files/vlb_thumbnails1/ep4.JPG',
    'https://www.afriwavetelecom.com/index_files/vlb_images1/ep5.JPG',
    'https://www.afriwavetelecom.com/index_files/vlb_images1/ep6.JPG',
    'https://www.afriwavetelecom.com/index_files/vlb_images1/ep7.JPG',
    'https://www.afriwavetelecom.com/index_files/vlb_images1/ep8.JPG',
    'https://www.afriwavetelecom.com/index_files/vlb_images1/epp1.JPG',
    'https://www.afriwavetelecom.com/index_files/vlb_images1/epp2.JPG',
    'https://www.afriwavetelecom.com/index_files/vlb_images1/epp3.JPG',
    'https://www.afriwavetelecom.com/index_files/vlb_images1/epp4.JPG',
    'https://www.afriwavetelecom.com/index_files/vlb_images1/dsc_0338.jpg',
    'https://www.afriwavetelecom.com/index_files/vlb_images1/dsc_0338.jpg',
    'https://www.afriwavetelecom.com/index_files/vlb_images1/blog1.jpg',
    'https://www.afriwavetelecom.com/index_files/vlb_images1/wear3.jpg',
    'https://www.afriwavetelecom.com/index_files/vlb_images1/dsc001.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
