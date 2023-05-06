import { Job } from 'src/app/@types';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CareerServiceService } from 'src/app/services/careers/career-service.service';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss'],
})
export class ViewDetailsComponent implements OnInit {
  job: Job = {} as Job;
  htmlContent: any;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.getItem(id).subscribe((item: Job) => {
        this.job = item;
        localStorage.setItem('job', JSON.stringify(this.job));
        this.isLoading = false;
        this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(
          this.job.jobDescription
        );
      });
    });
  }

  getItem(itemId: string) {
    return this.firestore
      .collection('jobs')
      .doc(itemId)
      .valueChanges({ idField: 'jobId' }) as Observable<Job>;
  }
}
