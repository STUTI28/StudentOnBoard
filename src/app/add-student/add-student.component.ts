import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Subscription } from 'rxjs';
import { MessageService } from '../services/message.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  message: any;
  subscription: Subscription;
  
  constructor(private router : Router , private messageService: MessageService) 
  { 
    this.subscription = this.messageService.getMessage().subscribe(message => { 
      this.message = message; 
    console.log(this.subscription);
    if(this.message  === undefined)
    { 
      console.log(11);   
    }
    else{

      console.log(12);   
      this.editStudentData(this.message);
    }
  });
}
 


  ngOnInit() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

editStudentData(id)
{
  this.profileForm = new FormGroup({
    name: new FormControl(null)
});
this.profileForm.controls['name'].setValue('Stuti');
// this.countryForm.controls['country'].setValue(this.default, {onlySelf: true});

}

      Category = [{'id':1, 'name':'International'}, {'id':2, 'name': 'Domestic'}];
      musicPreferences = [        'Pop' ];
        public minDate: Date = new Date ("05/07/1980");
        public maxDate: Date = new Date ("05/27/2025");
        public value: Date = new Date ("21/04/2019");


  profileForm = new FormGroup({
    name: new FormControl(''),
    Category: new FormControl(''),
    domicile: new FormControl(''),
    birthCertificate: new FormControl(''),
    marksheet: new FormControl(''),
    policeClearance: new FormControl(''),
    passport: new FormControl(''),
    declaration: new FormControl(''),
    datepicker: new FormControl(''),
    fname: new FormControl(''),
    mname: new FormControl(''),
    score: new FormControl(''),
  });

  onSubmit() {
    var obj = JSON.parse(localStorage.getItem('data'));
    obj.push(this.profileForm.value);
    console.log(JSON.stringify(obj));
    localStorage.setItem('data', JSON.stringify(obj));
  }

}
