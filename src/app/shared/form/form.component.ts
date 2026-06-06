import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @ViewChild('stdForm') stdForm !: NgForm
  defaultGender = 'Male'
  constructor(
    private _matSnackBar : MatSnackBar

  ) { }

  ngOnInit(): void {
  }

  onAdd(){
    if(this.stdForm.invalid){
     this.stdForm.form.markAllAsTouched()
     return
    }else{
      this.stdForm.reset()
    console.log(this.stdForm);
       this._matSnackBar.open('The new student is registered successfully !!!', 'close',{
      duration : 3000,
      horizontalPosition : 'left',
      verticalPosition : 'top'
    })
    
  }
}

   genderArr = ['Male','Female','other']

   courseArr = [
    'Select Course',
  'HTML Fundamentals',
  'HTML Forms & Tables',
  'CSS Basics',
  'CSS Flexbox & Grid',
  'CSS Animations',
  'Angular Basics',
  'Angular Data Binding',
  'Angular Services & DI',
  'Angular Routing',
  'Angular RxJS & Forms'
];

}
 



