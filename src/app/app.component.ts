import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'addition';
  firstNumber:string=""
  secondNumber:string="" 
  result=0;
  

  multiNumber(){
    this.result= parseInt(this.firstNumber)*parseInt(this.secondNumber);

  }


}
