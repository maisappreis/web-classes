import { Directive, ElementRef } from '@angular/core';

// Essa é uma Diretiva de Atributo.

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b'
  }

}

