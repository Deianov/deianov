import { Component, computed, inject, Signal, ViewEncapsulation } from '@angular/core';
import { DataService } from '@core';
import { JsonTableComponent, SortState, TableRow } from '@shared/components/json-table/json-table.component';

@Component({
  selector: 'app-garden',
  standalone: true,
  imports: [JsonTableComponent], // JsonMaterialTableComponent
  templateUrl: './garden.component.html',
  styleUrl: './garden.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class GardenComponent {
  readonly #plantsUrl = 'assets/json/plants.json';

  // Initial sort state by indexes
  private readonly PRIMARY_SORT_INDEX = 3;
  private readonly SECONDARY_SORT_INDEX = 2;
  private readonly SORTABLE_FIELDS = [0, 2, 3];

  protected plants: Signal<TableRow[]> = inject(DataService).getJson<TableRow[]>(
    this.#plantsUrl,
    [],
  );

  // Add a row attribute for styling.
  protected addAttributes = { key: 'flag', fromCell: 'Flag' };

  protected initialSortState = computed<SortState>(() => {
    const fields = this.plants()[0];
    return {
      primary: this.mapToField(this.PRIMARY_SORT_INDEX, fields),
      secondary: this.mapToField(this.SECONDARY_SORT_INDEX, fields),
      sortable: this.mapToFields(this.SORTABLE_FIELDS, fields),
    };
  });

  private mapToField(index: number, obj: TableRow | undefined): string | null {
    if (obj) {
      return Object.keys(obj)[index] ?? null;
    }
    return null;
  }

  private mapToFields(indexes: number[], obj: TableRow) {
    if (obj) {
      const fields = Object.keys(obj);
      return indexes.map((index) => String(fields[index]));
    }
    return [];
  }
}
