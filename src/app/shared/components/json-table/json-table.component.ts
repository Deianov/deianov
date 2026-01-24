import { ChangeDetectionStrategy, Component, computed, effect, input, Signal, signal, untracked } from '@angular/core';
import { DynamicAttrDirective } from '@shared/directives/dynamic-attr.directive';
import { ArrowComponent } from '@shared/svg/arrow.component';

export type TableRow = Record<string, string | number>;
export type SortState = {
  primary: string | null;
  secondary: string | null;
  sortable: string[];
};

@Component({
  selector: 'json-table',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DynamicAttrDirective, ArrowComponent],
  templateUrl: './json-table.component.html',
  styleUrl: './json-table.component.css',
})
export class JsonTableComponent {
  private readonly EMPTY_SORT_STATE = { primary: null, secondary: null, sortable: [] };

  /** Immutable input with synthetic internal ID */
  readonly data = input<TableRow[], TableRow[]>([], {
    // shallow copy (deep -> structuredClone)
    transform: (value) => {
      let id = 1;
      return value.map((item) => ({ ...item, _id: id++ }));
    },
  });

  /** Only onetime initial sort State */
  readonly sort = input<SortState>();

  /** Set row attribute by cell name. */
  readonly attribute = input<{ key: string; fromCell: string }>({ key: '', fromCell: '' });

  /** Local mutable copy */
  protected localData = signal<TableRow[]>([]);

  /** Table column names */
  protected columns: Signal<string[]> = computed(() =>
    this.data().length ? Object.keys(this.data()[0]).filter((k) => k !== '_id') : [],
  );

  private sortState = signal<SortState>(this.EMPTY_SORT_STATE);

  constructor() {
    // Reset local state whenever input changes
    effect(() => {
      const data = this.data();
      const sort = this.sort();
      untracked(() => {
        this.localData.set(data);
        this.sortState.set(sort ?? this.EMPTY_SORT_STATE);
        this.applySort();
      });
    });
  }

  protected isPrimary(key: string): boolean {
    return this.sortState()?.primary === key;
  }

  protected isSecondary(key: string): boolean {
    return this.sortState()?.secondary === key;
  }

  protected isSortable(key: string): boolean {
    return this.sortState().sortable.includes(key);
  }

  protected sortBy(field: string) {
    this.sortState.update((state) => {
      const { primary, secondary, sortable } = state;
      // No secondary yet → add as secondary
      if (primary && field !== primary && !secondary) {
        return { primary, secondary: field, sortable };
      }
      // Promote to primary
      return { primary: field, secondary: null, sortable };
    });
    this.applySort();
  }

  private applySort() {
    const { primary, secondary } = this.sortState();
    if (!primary) return;

    this.localData.update((list) =>
      [...list].sort((a, b) => {
        const primaryResult = this.compare(a[primary], b[primary]);

        if (primaryResult !== 0) {
          return primaryResult;
        }

        if (secondary) {
          return this.compare(a[secondary], b[secondary]);
        }

        return 0;
      }),
    );
  }

  private compare(a: any, b: any): number {
    // empty cells go to the bottom
    const isEmptyA = a === null || a === undefined || a === '';
    const isEmptyB = b === null || b === undefined || b === '';

    if (isEmptyA && isEmptyB) return 0;
    if (isEmptyA) return 1; // A goes after B
    if (isEmptyB) return -1; // B goes after A

    if (typeof a === 'string' && typeof b === 'string') {
      return a.localeCompare(b);
    }

    return a < b ? -1 : a > b ? 1 : 0;
  }

  // private updateRow(index: number, changes: TableRow) {
  //   this.localData.update((list) =>
  //     list.map((item, i) => (i === index ? { ...item, ...changes } : item)),
  //   );
  // }
}
