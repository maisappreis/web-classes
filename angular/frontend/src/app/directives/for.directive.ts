import {
  Directive,
  OnInit,
  Input,
  ViewContainerRef,
  TemplateRef,
} from "@angular/core";

// Essa é uma Diretiva de Estrutura.

@Directive({
  selector: "[myFor]",
})
export class ForDirective implements OnInit {
  @Input("myForEm") numbers: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(
        this.template, { $implicit : number });
    }
  }
}
