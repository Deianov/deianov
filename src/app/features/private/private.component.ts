import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DataService } from '@core';

import { MapComponent } from './components/map/map.component';
import { PlanComponent } from './components/plan/plan.component';
import { Layer } from './private.enums';
import { IPrivateAdapted } from './private.model';

@Component({
    selector: 'app-private',
    standalone: true,
    imports: [AsyncPipe, NgClass, PlanComponent, MapComponent],
    templateUrl: './private.component.html',
})
export class PrivateComponent {
    #dataService = inject(DataService);

    data: IPrivateAdapted = {
        title: '',
        floor_rooms: [],
        floor_areas: [],
        floor_total_text: [],
        attic_rooms: [],
        attic_areas: [],
        attic_total_text: [],
        google: '',
    };

    constructor() {
        this.#dataService.getPrivateData().then((obj) => {
            Object.assign(this.data, obj);
        });
    }

    level = 1;
    layer = Layer.WHITE;
    showMap = false;

    setLevel(level: number) {
        this.level = level;
        this.showMap = false;
        return false;
    }

    setMap() {
        this.showMap = true;
        return false;
    }
}
