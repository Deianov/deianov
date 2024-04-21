import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [NgClass],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
})
export class CertificatesComponent {
  isList = true;

  selectTab(value: boolean) {
    this.isList = value;

    // stop the default behavior
    return false;
  }
}
