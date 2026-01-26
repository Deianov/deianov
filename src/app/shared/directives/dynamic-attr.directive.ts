import { Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDynamicAttr]',
})
export class DynamicAttrDirective {
  readonly #inputRef = inject(ElementRef);
  readonly #renderer = inject(Renderer2);

  readonly appDynamicAttr = input<{ name: string; value: any }>({ name: '', value: '' });

  constructor() {
    effect(() => {
      const { name, value } = this.appDynamicAttr();

      if (name) {
        if (value === null || value === undefined) {
          this.#renderer.removeAttribute(this.#inputRef.nativeElement, name);
        } else {
          this.#renderer.setAttribute(this.#inputRef.nativeElement, name, String(value));
        }
      }
    });
  }
}
