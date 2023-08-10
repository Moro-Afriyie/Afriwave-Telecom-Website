import { BlogDetailsComponent } from './pages/blog/blog-details/blog-details.component';
import { AllJobsComponent } from './pages/carrers/all-jobs/all-jobs.component';
import { ViewDetailsComponent } from './pages/carrers/view-details/view-details.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CarrersComponent } from './pages/carrers/carrers.component';
import { OurExpertsComponent } from './pages/about-us/our-experts/our-experts.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyNowComponent } from './pages/carrers/apply-now/apply-now.component';
import { HistoryComponent } from './pages/about-us/history/history.component';
import { VisionComponent } from './pages/about-us/vision/vision.component';
import { ClientsComponent } from './pages/about-us/clients/clients.component';
import { IchComponent } from './pages/services/ich/ich.component';
import { TrafficMonitoringComponent } from './pages/services/traffic-monitoring/traffic-monitoring.component';
import { TelecomunicationsNetworkComponent } from './pages/services/telecomunications-network/telecomunications-network.component';
import { DataCentersComponent } from './pages/services/data-centers/data-centers.component';
import { BlogListComponent } from './pages/blog/blog-list/blog-list.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { SmsServicesComponent } from './pages/services/sms-services/sms-services.component';

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

  { path: 'blogs', component: BlogListComponent },
  { path: 'blogs/:id', component: BlogDetailsComponent },

  { path: 'contact-us', component: ContactUsComponent },
  { path: 'services/ich', component: IchComponent },
  {
    path: 'services/traffic-routing',
    component: TrafficMonitoringComponent,
  },
  {
    path: 'services/traffic-routing',
    component: TrafficMonitoringComponent,
  },
  {
    path: 'services/sms-services',
    component: SmsServicesComponent,
  },
  {
    path: 'services/telecomunications-network',
    component: TelecomunicationsNetworkComponent,
  },
  { path: 'services/data-centers', component: DataCentersComponent },
  { path: 'privacy-policy', component: PrivacyComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
