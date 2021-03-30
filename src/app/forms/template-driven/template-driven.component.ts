import { Component, OnInit, ViewChild,  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})

export class TemplateDrivenComponent implements OnInit {

  @ViewChild('f') signupForm!: NgForm;

  answer: string | any;
  defaultQn = 'pet';
  genders = ['male', 'female'];
  formSubmitted = false;

  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }


  constructor() { }

  ngOnInit(): void {
  }

  onSuggestUsername() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      username: suggestedName,
    })
  }

  onSubmit() {
    this.user.username = this.signupForm.value.username;
    this.user.email = this.signupForm.value.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.answer;
    this.user.gender = this.signupForm.value.gender;

    this.formSubmitted = true;
    this.signupForm.reset();
  }

}
