import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AbstractControl, FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../data.service';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,ReactiveFormsModule,MatButtonModule,MatCheckboxModule,MatInputModule,MatIconModule],
  templateUrl: './registration.component.html',
  styleUrls:[ './registration.component.css']
})
export class RegistrationComponent {

checkbox:boolean=false;
hello(){
  console.log(this.data.get('name')?.value)
}
data=new FormGroup({
  checkbox:new FormControl<boolean>(false),
  food:new FormControl<string|null>(null),
  name:new FormControl<string|null>(null)
});
changeValue(){
  this.checkbox=true;
}
clear(){
  this.data.get('name')?.reset();
}
}