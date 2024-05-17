import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss'],
})
export class BookAppointmentComponent implements OnInit {
  mapImg: string = '/assets/Images/mapImg.svg';
  homeIcon: string = '/assets/Icons/homeIcon.svg';
  callIcon: string = '/assets/Icons/callIcon.svg';
  appointmentForm!: FormGroup;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.appointmentForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      services: new FormControl('Scaling', Validators.required),
      department: new FormControl('Oral surgery', Validators.required),
      message: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.appointmentForm.value);
    this.appointmentForm.get('username')?.reset();
    this.appointmentForm.get('email')?.reset();
    this.appointmentForm.get('message')?.reset();

    // this.appointmentForm.get('services')?.reset();
    // this.appointmentForm.get('department')?.reset();
  }
}
