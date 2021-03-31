import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicals',
  templateUrl: './practicals.component.html',
  styleUrls: ['./practicals.component.css']
})
export class PracticalsComponent implements OnInit {

  statuses = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectNames = ['Test']
  projectDetails = {
    name: '',
    email: '',
    status: ''
  }

  projForm: FormGroup | any;

  constructor() { }

  ngOnInit() {
    this.projForm = new FormGroup({
      'projName': new FormControl(null, [Validators.required], this.forbiddenProjectNamesValidator),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null)
    });
  }

  // forbiddenProjectNamesValidator(control: FormControl): { [s: string]: boolean } | null {
  //   if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
  //     return {'nameIsForbidden': true}
  //   }
  //   return null;
  // }

  forbiddenProjectNamesValidator(control: AbstractControl): Promise<any> | Observable<any> | any {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ 'nameIsForbidden': true });
        }
        else {
          resolve(null)
        }
      }, 1500);
    });

    return promise;
  }

  submitProjDetails() {
    this.projectDetails = this.projForm.value;
    console.log(this.projectDetails.name)
  }

}
