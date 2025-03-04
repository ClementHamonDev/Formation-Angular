import { Directive } from '@angular/core';
import { ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.color = 'red';
  }


}
