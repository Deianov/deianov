import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDynamicAttr]',
})
export class DynamicAttrDirective implements OnChanges {
  @Input('appDynamicAttr') attr: { name: string; value: any } = { name: '', value: '' };

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['attr']) {
      const { name, value } = this.attr;
      if (name) {
        if (value === null || value === undefined) {
          this.renderer.removeAttribute(this.el.nativeElement, name);
        } else {
          this.renderer.setAttribute(this.el.nativeElement, name, String(value));
        }
      }
    }
  }
}
