import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { AboutUsComponent } from './components/page/about-us/about-us.component';
import { NewPatientComponent } from './components/page/new-patient/new-patient.component';
import { OurServicesComponent } from './components/page/our-services/our-services.component';
import { ContactUsComponent } from './components/page/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'new-patient', component: NewPatientComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
