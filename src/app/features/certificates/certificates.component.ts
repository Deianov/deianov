import { Component } from '@angular/core';
import { LoaderComponent } from '@shared/svg/loader.component';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [LoaderComponent],
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
