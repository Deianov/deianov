import { Component, computed, Input, signal, ViewEncapsulation } from '@angular/core';

type JsonArray = Record<string, string | number>[];

@Component({
  selector: 'json-table',
  standalone: true,
  imports: [],
  templateUrl: './json-table.component.html',
  styleUrl: './json-table.component.css',
  // encapsulation: ViewEncapsulation.None,
})
export class JsonTableComponent {
  private _data = signal<JsonArray>([]);

  @Input() set data(value: JsonArray) {
    this._data.set(value.map((item) => ({ ...item })));
  }

  // Read the specified cell by name and set the table row attribute with the key "flag".
  @Input() setRowAttrFromCell?: string;

  tableData = this._data.asReadonly();

  tableColumns = computed(() => {
    return this.tableData().length ? Object.keys(this.tableData()[0]) : [];
  });
}
