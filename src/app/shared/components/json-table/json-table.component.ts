import { Component, effect, Input, input, signal } from '@angular/core';

type JsonArrayType = Record<string, string | number>;

@Component({
  selector: 'json-table',
  standalone: true,
  imports: [],
  templateUrl: './json-table.component.html',
  styleUrl: './json-table.component.css',
})
export class JsonTableComponent {
  /** Table data without reference. (readonly) */
  readonly data = input<JsonArrayType[], JsonArrayType[]>([], {
    // shallow
    transform: (value) => value.map((item) => ({ ...item })),

    /** deep
    transform: (value) => structuredClone(value)
    */
  });

  /** Local mutable copy */
  localData = signal<JsonArrayType[]>([]);

  /** Table column names */
  columns: string[] = [];

  /** Set row attribute by cell name.
   *  toDo: Find a way to set the attribute name dynamically. Only work with key 'flag'.
   */
  @Input() setRowAttribute?: { key: string; fromCell: string };

  constructor() {
    // Sync data whenever input changes
    effect(() => {
      this.localData.set(this.data());
      this.columns = this.localData().length ? Object.keys(this.localData()[0]) : [];
    });
  }

  private sortBy(field: keyof JsonArrayType) {
    const sorted = [...this.localData()].sort((a, b) =>
      a[field] < b[field] ? -1 : a[field] > b[field] ? 1 : 0,
    );

    this.localData.set(sorted);
  }

  private updateRow(index: number, changes: JsonArrayType) {
    const updated = this.localData().map((item, i) =>
      i === index ? { ...item, ...changes } : item,
    );

    this.localData.set(updated);
  }
}
