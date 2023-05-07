import { AllJobsComponent } from './pages/carrers/all-jobs/all-jobs.component';
import { ViewDetailsComponent } from './pages/carrers/view-details/view-details.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { OtherServicesComponent } from './pages/services/other-services/other-services.component';
import { DataScienceComponent } from './pages/services/data-science/data-science.component';
import { BigDataComponent } from './pages/services/big-data/big-data.component';
import { DataAnalyticsComponent } from './pages/services/data-analytics/data-analytics.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CarrersComponent } from './pages/carrers/carrers.component';
import { OurExpertsComponent } from './pages/about-us/our-experts/our-experts.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategyComponent } from './pages/services/strategy/strategy.component';
import { ApplyNowComponent } from './pages/carrers/apply-now/apply-now.component';
import { HistoryComponent } from './pages/about-us/history/history.component';
import { VisionComponent } from './pages/about-us/vision/vision.component';
import { ClientsComponent } from './pages/about-us/clients/clients.component';

const routes: Routes = [
  // {
  //   path: 'about/voltican-edge',
  //   component: VolticanEdgeComponent,
  // },
  // { path: 'about/clientele', component: ClienteleComponent },
  { path: 'about/history', component: HistoryComponent },
  { path: 'about/management-team', component: OurExpertsComponent },
  { path: 'about/vision', component: VisionComponent },
  { path: 'about/clients', component: ClientsComponent },
  {
    path: 'careers',
    component: CarrersComponent,
    children: [
      { path: '', component: AllJobsComponent },
      { path: 'view-details/:id', component: ViewDetailsComponent },
      { path: 'apply-now/:id', component: ApplyNowComponent },
    ],
  },

  { path: 'contact-us', component: ContactUsComponent },
  { path: 'services/data-analytics', component: DataAnalyticsComponent },
  { path: 'services/big-data-and-engineering', component: BigDataComponent },
  { path: 'services/strategy-and-architecture', component: StrategyComponent },
  { path: 'services/data-science', component: DataScienceComponent },
  { path: 'services/other-services', component: OtherServicesComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
