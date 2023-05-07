import { CarouselModule } from './carousel/carousel.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CarrersComponent } from './pages/carrers/carrers.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { OurExpertsComponent } from './pages/about-us/our-experts/our-experts.component';
//import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { ViewDetailsComponent } from './pages/carrers/view-details/view-details.component';
import { ApplyNowComponent } from './pages/carrers/apply-now/apply-now.component';
import { AllJobsComponent } from './pages/carrers/all-jobs/all-jobs.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HistoryComponent } from './pages/about-us/history/history.component';
import { VisionComponent } from './pages/about-us/vision/vision.component';
import { ClientsComponent } from './pages/about-us/clients/clients.component';
import { BlogListComponent } from './pages/blog/blog-list/blog-list.component';
import { IchComponent } from './pages/services/ich/ich.component';
import { TrafficMonitoringComponent } from './pages/services/traffic-monitoring/traffic-monitoring.component';
import { TelecomunicationsNetworkComponent } from './pages/services/telecomunications-network/telecomunications-network.component';
import { DataCentersComponent } from './pages/services/data-centers/data-centers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ServicesComponent,
    AboutUsComponent,
    CarrersComponent,
    ContactUsComponent,
    CertificationsComponent,
    OurExpertsComponent,
    ViewDetailsComponent,
    ApplyNowComponent,
    AllJobsComponent,
    LoaderComponent,
    HistoryComponent,
    VisionComponent,
    ClientsComponent,
    BlogListComponent,
    IchComponent,
    TrafficMonitoringComponent,
    TelecomunicationsNetworkComponent,
    DataCentersComponent,
  ],
  imports: [
    //CarouselModule,
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    CarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
