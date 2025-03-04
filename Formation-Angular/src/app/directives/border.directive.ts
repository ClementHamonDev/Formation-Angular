import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective  {
  
  @Input() borderColor: string = 'black';
  @Input() borderWidth: string = '2px';

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.el.nativeElement.style.border = `${this.borderWidth} solid ${this.borderColor}`;
  }
}
