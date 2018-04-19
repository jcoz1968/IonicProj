import { Directive } from '@angular/core';

@Directive({
  selector: '[my]' // Attribute selector
})
export class MyDirective {

  constructor() {
    console.log('Hello MyDirective Directive');
  }

}
