import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileService {
  private mobileQuery = getComputedStyle(document.body).getPropertyValue('--phoneWidth');

  /*
    setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    */

  isMobile = () => window.matchMedia(this.mobileQuery).matches;
}
