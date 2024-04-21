import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  private mobileQuery = getComputedStyle(document.body).getPropertyValue(
    '--phoneWidth'
  );

  isMobile = () => window.matchMedia(this.mobileQuery).matches;
}
