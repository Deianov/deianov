import { Component, input } from '@angular/core';
import { SafeURLPipe } from '@shared/pipes/safe-url.pipe';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [SafeURLPipe],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  url = input.required<string>();
}
