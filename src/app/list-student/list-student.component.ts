import { UsersService, Employee } from '../services/users.service';
import { MessageService } from '../services/message.service';
import {Router} from '@angular/router';
import { Component, OnDestroy ,OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {

  selectedTab: number;
  subscription: Subscription;
  @Output() public tabChange = new EventEmitter();  
  constructor(
    public userService: UsersService , private messageService: MessageService , private router : Router) { }

  
    ngOnInit() {
      // unsubscribe to ensure no memory leaks
      this.userService.fetchEmployees();
  }

  deleteFieldValue(index) {
    if(confirm("Are you sure to delete "))
    {    console.log(index);
      var obj = JSON.parse(localStorage.getItem('data'));
      obj.splice(index , 1);
      console.log(obj);
      localStorage.setItem('data', JSON.stringify(obj));
      this.con  = this.userService.getMyStudents();
    }
   }

editFieldValue(index) {
  this.tabChange.emit(0);
  console.log(index);   
  this.messageService.sendMessage(index);
 }

viewFieldValue(index) {
  console.log(index);   
  this.messageService.sendMessage(index);
  this.tabChange.emit(0);

}
  
con  = this.userService.getMyStudents();



}
