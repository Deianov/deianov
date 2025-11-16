import { Component, inject, ViewEncapsulation } from '@angular/core';
import { DataService } from '@core';
import { JsonTableComponent } from '@shared/components/json-table/json-table.component';

@Component({
  selector: 'app-garden',
  standalone: true,
  imports: [JsonTableComponent],
  templateUrl: './garden.component.html',
  styleUrl: './garden.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class GardenComponent {
  private platsUrl = 'assets/json/plants.json';

  setRowAttrFromCell = 'Flag';

  plants = inject(DataService).getJson(this.platsUrl, []);
}
