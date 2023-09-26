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

  images: any = [];

  constructor(private firestore: AngularFirestore) {
    this.galleryData$ = this.onGetAllJobsCollection();

    this.galleryData$.subscribe((gallery) => {
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
