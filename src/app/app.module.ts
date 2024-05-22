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
import { DentistryComponent } from './components/dentistry/dentistry.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { BlogComponent } from './components/blog/blog.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutHeroComponent } from './about-page/about-hero/about-hero.component';
import { OurPriorityComponent } from './about-page/our-priority/our-priority.component';
import { SafetyComponent } from './about-page/safety/safety.component';
import { DentalTeamComponent } from './about-page/dental-team/dental-team.component';
import { FaqsComponent } from './about-page/faqs/faqs.component';
// import { AboutHeroComponent } from './aboutComponents/about-hero/about-hero.component';
// import { OurPriorityComponent } from './aboutCompoenets/our-priority/our-priority.component';

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
    FeaturesComponent,
    DentistryComponent,
    TestimonialComponent,
    BlogComponent,
    BookAppointmentComponent,
    FooterComponent,
    AboutHeroComponent,
    OurPriorityComponent,
    SafetyComponent,
    DentalTeamComponent,
    FaqsComponent,
    // AboutHeroComponent,
    // OurPriorityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
