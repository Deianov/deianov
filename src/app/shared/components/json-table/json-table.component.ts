import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  Input,
  input,
  Signal,
  signal,
} from '@angular/core';

type JsonArrayType = Record<string, string | number>;

@Component({
  selector: 'json-table',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './json-table.component.html',
  styleUrl: './json-table.component.css',
})
export class JsonTableComponent {
  /** Immutable input with synthetic internal ID */
  readonly data = input<JsonArrayType[], JsonArrayType[]>([], {
    // shallow copy (deep -> structuredClone)
    transform: (value) => {
      let id = 1;
      return value.map((item) => ({ ...item, _id: id++ }));
    },
  });

  /** Local mutable copy */
  localData = signal<JsonArrayType[]>([]);

  /** Table column names */
  columns: Signal<string[]> = computed(() =>
    this.data().length ? Object.keys(this.data()[0]).filter((k) => k !== '_id') : [],
  );

  /** Set row attribute by cell name.
   *  toDo: Find a way to set the attribute name dynamically. Only work with key 'flag'.
   */
  @Input() setRowAttribute?: { key: string; fromCell: string };

  constructor() {
    // Sync data whenever input changes
    effect(() => {
      const data = this.data();
      this.localData.set(data);
    });
  }

  private sortBy(field: keyof JsonArrayType) {
    this.localData.update((list) => [...list].sort((a, b) => (a[field] < b[field] ? -1 : 1)));
  }

  private updateRow(index: number, changes: JsonArrayType) {
    this.localData.update((list) =>
      list.map((item, i) => (i === index ? { ...item, ...changes } : item)),
    );
  }
}
