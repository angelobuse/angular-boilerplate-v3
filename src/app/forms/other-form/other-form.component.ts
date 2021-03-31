import { Component, OnInit, ViewChild } from '@angular/core';
import {  AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-other-form',
  templateUrl: './other-form.component.html',
  styleUrls: ['./other-form.component.css']
})
export class OtherFormComponent implements OnInit {

  genders = ['male', 'female'];
  forbiddenUsernames = ['Angelo', 'Anna'];

  signupForm: FormGroup | any;

  constructor() { }

  ngOnInit() {

    // Creating a form
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenUsernamesValidator.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmailValidator)
      }),
      'gender': new FormControl('male')
    });

  }

  // Custom validator checking forbidden username
  forbiddenUsernamesValidator(control: FormControl): { [s:string] : boolean  } | null{
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }

  // Custom Asynchronous validator
  forbiddenEmailValidator(control: AbstractControl): Promise<any> | Observable <any>  {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'angelobusee@gmail.com') {
          resolve({
            'emailIsForbidden': true
          });
        }
        else {
          resolve(null);
        }
      }, 1500)
    });

    return promise;
  }

  onSubmit() {
    console.log(this.signupForm.value.userData);
  }



}
