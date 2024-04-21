import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeURL',
  standalone: true,
})
export class SafeURLPipe implements PipeTransform {
  readonly #sanitizer = inject(DomSanitizer);
  transform(url: string): SafeUrl {
    return this.#sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
