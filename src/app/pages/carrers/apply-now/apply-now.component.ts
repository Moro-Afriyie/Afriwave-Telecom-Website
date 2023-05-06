import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/@types';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.scss'],
})
export class ApplyNowComponent implements OnInit {
  job: Job = {} as Job;
  isLoading = false;
  id: string = '';

  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    if (!localStorage.getItem('job')) {
      this.getJob(this.id).subscribe((item: Job) => {
        this.job = item;
        this.isLoading = false;
      });
    } else {
      this.job = JSON.parse(localStorage.getItem('job') || '{}');
      if (this.id !== this.job.jobId) {
        this.getJob(this.id).subscribe((item: Job) => {
          this.job = item;
          this.isLoading = false;
        });
      }
    }
  }

  getJob(itemId: string) {
    this.isLoading = true;
    return this.firestore
      .collection('jobs')
      .doc(itemId)
      .valueChanges({ idField: 'jobId' }) as Observable<Job>;
  }
}
