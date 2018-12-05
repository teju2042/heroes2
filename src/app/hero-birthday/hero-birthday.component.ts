import { Component, OnInit } from '@angular/core';
import { OrderPipe } from 'ngx-order-pipe';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-hero-birthday',
  templateUrl: './hero-birthday.component.html',
  styleUrls: ['./hero-birthday.component.css'],
  
})

export class HeroBirthdayComponent implements OnInit {
  
  birthday = new Date(1988, 3, 15); // April 15, 1988
  today = new Date(2018, 11, 30);
  salary = 100000; // currency pipe
  pi: number = 3.14; // number pipe
  e: number = 2.718281828459045; // number pipe
  users: any[] = [{ name: 'John' }, { name: 'Jane' }, { name: 'Mario' }, { name: 'teju'}]; // filter pipe
  userFilter: any = { name: '' }; // filter pipe

  array: any[] = [{ name: 'John'} , { name: 'Mary' }, { name: 'Adam' }]; // orderby pipe
  order: string = 'name'; // orderby pipe

  user = { name: 'Teju', age: 22 }; // ngx-translate
  
  constructor(private translate: TranslateService) {
 
    translate.setDefaultLang('en');
 
  }
  switchLanguage(language: string) {
  
    this.translate.use(language);

  }

  ngOnInit() {
  }

}
/* async and await
async function f() {

  let promise = new Promise((resolve, reject) =>
  {
    setTimeout(() => resolve("done!"), 1000)  
  });

    let result = await promise;
    alert(result); //done;
}
f(); */
