import { Component, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { JsonTableComponent } from '../json-table/json-table.component';

@Component({
  selector: 'json-material-table',
  imports: [MatTableModule, MatSortModule, MatSort],
  templateUrl: './json-material-table.component.html',
  styleUrl: './json-material-table.component.css',
})
export class JsonMaterialTableComponent extends JsonTableComponent {}
