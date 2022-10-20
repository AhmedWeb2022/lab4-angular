import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  userData: { name: string; email: string; age: number } = {
    name: '',
    email: '',
    age: 0,
  };
  formValidation = new FormGroup({
    name: new FormControl('medo', Validators.required),
    age: new FormControl(0, [Validators.min(20), Validators.max(40)]),
    email: new FormControl('medo@medo.com', Validators.email),
  });
  get nameValid() {
    return this.formValidation.controls.name.valid;
  }
  get emailValid() {
    return this.formValidation.controls.email.valid;
  }
  get ageValid() {
    return this.formValidation.controls.age.valid;
  }
  sendData(name: string, email: string, age: number) {
    this.userData = { name: name, email: email, age: age };
    this.router.navigateByUrl('/profile', { state: this.userData });
  }

  ngOnInit(): void {}
}
