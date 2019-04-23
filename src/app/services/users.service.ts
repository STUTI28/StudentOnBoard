import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { tap } from 'rxjs/operators';

export interface Employee {
  name: string;
  age: number;
  gender: string;
  experience: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  employees$: BehaviorSubject<Employee[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  getEmployees() {
    const url = '/assets/students.json';

    return this.http.get<Employee[]>(url).pipe(
      tap(data => {
        this.employees$.next(data);
      })
    );
  }

  fetchEmployees() {
    const url = '/assets/students.json';

    this.http.get<Employee[]>(url).subscribe(data => {
      this.employees$.next(data);
      console.log(localStorage.key.length);
      if(!(localStorage.key.length > 1))
      {localStorage.setItem('data', JSON.stringify(data));}
      
    });
  }

  addNewEmp(emp: Employee) {
    const currentData = this.employees$.getValue();
    const updatedData = [...currentData, emp];

    this.employees$.next(updatedData);
  }

  getMyStudents()
  {
    return JSON.parse(localStorage.getItem('data'));
    // x.forEach(element => {
    //    var y = element;
    //    console.log(y.name);
    //    return(y.name);
        
    // });
  }
//   getMyStudents()
//   {
//     var values = [],
//     keys = Object.keys(localStorage),
//     i = keys.length;
// console.log(i);
// while ( i-- ) {
//   console.log(localStorage.getItem(keys[i]));
//     values.push( localStorage.getItem(keys[i]) );
// }

// return values;
//   }
}
