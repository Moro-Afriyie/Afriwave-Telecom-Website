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
import { VolticanEdgeComponent } from './pages/about-us/voltican-edge/voltican-edge.component';
import { ClienteleComponent } from './pages/about-us/clientele/clientele.component';
import { DataAnalyticsComponent } from './pages/services/data-analytics/data-analytics.component';
import { BigDataComponent } from './pages/services/big-data/big-data.component';
import { StrategyComponent } from './pages/services/strategy/strategy.component';
import { DataScienceComponent } from './pages/services/data-science/data-science.component';
import { OtherServicesComponent } from './pages/services/other-services/other-services.component';
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
    VolticanEdgeComponent,
    ClienteleComponent,
    DataAnalyticsComponent,
    BigDataComponent,
    StrategyComponent,
    DataScienceComponent,
    OtherServicesComponent,
    ViewDetailsComponent,
    ApplyNowComponent,
    AllJobsComponent,
    LoaderComponent,
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
