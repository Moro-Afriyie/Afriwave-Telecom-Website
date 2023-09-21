import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  isLoading = false;
  galleryData$: Observable<any[]>;

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

  constructor(private firestore: AngularFirestore) {
    this.galleryData$ = this.onGetAllJobsCollection();
    this.galleryData$.subscribe((job) => {
      // this.carrerService.setJobs(job);
      this.isLoading = false;
    });
  }

  ngOnInit(): void {}

  onGetAllJobsCollection(): Observable<any[]> {
    this.isLoading = true;
    return this.firestore
      .collection('gallery')
      .valueChanges()
      .pipe(map((data: any) => data));
  }
}
