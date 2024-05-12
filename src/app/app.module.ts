import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/page/home/home.component';
import { AboutUsComponent } from './components/page/about-us/about-us.component';
import { NewPatientComponent } from './components/page/new-patient/new-patient.component';
import { OurServicesComponent } from './components/page/our-services/our-services.component';
import { ContactUsComponent } from './components/page/contact-us/contact-us.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ServicesComponent } from './components/services/services.component';
import { EmergencyComponent } from './components/emergency/emergency.component';
import { FeaturesComponent } from './components/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NewPatientComponent,
    OurServicesComponent,
    ContactUsComponent,
    HeaderComponent,
    HeroSectionComponent,
    ServicesComponent,
    EmergencyComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
