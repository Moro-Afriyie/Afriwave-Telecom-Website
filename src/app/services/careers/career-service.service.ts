import { Injectable } from '@angular/core';
import { Job } from 'src/app/@types';

@Injectable({
  providedIn: 'root',
})
export class CareerServiceService {
  jobs: Job[] = [];

  constructor() {}

  setJobs(jobs: Job[]) {
    this.jobs = jobs;
  }

  getAllJobs(): Job[] {
    return this.jobs;
  }

  getJobById(id: string): Job {
    return this.jobs.filter((item) => item.jobId === id)[0];
  }
}
