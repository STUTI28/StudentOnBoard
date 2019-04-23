import { MessageService } from './services/message.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  message: any;
  subscription: Subscription;
  editOrView: true;
  routeLinks: any[];
  activeLinkIndex = -1;
  tabValue;
  

  constructor(private messageService: MessageService , private router: Router) 
  { 
  
  this.routeLinks = [ 
];
}

clearMessage(): void {
  // clear message
  this.messageService.clearMessage();
}

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}



  tabClick() {
    console.log('click');
  }
  
}
