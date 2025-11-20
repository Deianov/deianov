import { Component, inject, ViewEncapsulation } from '@angular/core';
import { DataService } from '@core';
import { JsonMaterialTableComponent } from '@shared/components/json-material-table/json-material-table.component';
import { JsonTableComponent } from '@shared/components/json-table/json-table.component';

@Component({
  selector: 'app-garden',
  standalone: true,
  imports: [JsonTableComponent, JsonMaterialTableComponent],
  templateUrl: './garden.component.html',
  styleUrl: './garden.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class GardenComponent {
  readonly #platsUrl = 'assets/json/plants.json';

  readonly setRowAttributeFromCell = { key: 'flag', fromCell: 'Flag' };

  readonly plants = inject(DataService).getJson(this.#platsUrl, []);
}
