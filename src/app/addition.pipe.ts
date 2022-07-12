import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addition'
})
export class AdditionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
  firstNumber:string=""
  secondNumber:string="" 
  result=0;
  

  AddNumber(){
    this.result= parseInt(this.firstNumber)+parseInt(this.secondNumber);

  }


}
