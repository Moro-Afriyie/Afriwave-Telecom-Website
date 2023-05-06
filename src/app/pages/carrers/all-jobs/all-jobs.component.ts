import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Job } from 'src/app/@types';
import { CareerServiceService } from 'src/app/services/careers/career-service.service';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.scss'],
})
export class AllJobsComponent implements OnInit {
  jobs$: Observable<Job[]>;
  isLoading = false;

  constructor(
    private firestore: AngularFirestore,
    private carrerService: CareerServiceService
  ) {
    this.jobs$ = this.onGetAllJobsCollection();
    this.jobs$.subscribe((job) => {
      this.carrerService.setJobs(job);
      this.isLoading = false;
    });
  }

  ngOnInit(): void {}

  onGetAllJobsCollection(): Observable<Job[]> {
    this.isLoading = true;
    return this.firestore
      .collection('jobs', (orders) => orders.orderBy('datePosted', 'desc'))
      .valueChanges({ idField: 'jobId' })
      .pipe(map((data: any) => data as Job[]));
  }
}
