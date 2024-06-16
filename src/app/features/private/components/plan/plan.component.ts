import { DecimalPipe } from '@angular/common';
import { Component, computed, input, model } from '@angular/core';
import { Layer } from '@features/private/private.enums';
import { IPrivateAdapted } from '@features/private/private.model';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css',
})
export class PlanComponent {
  Layer = Layer;
  level = input.required<number>();
  layer = model.required<Layer>();
  data = input.required<IPrivateAdapted>();

  labels = computed(() => {
    if (this.layer() === Layer.GREEN) {
      return this.level() === 1 ? this.data().floor_areas : this.data().attic_areas;
    } else {
      return this.level() === 1 ? this.data().floor_rooms : this.data().attic_rooms;
    }
  });

  setLayer(layer: Layer) {
    this.layer.set(layer);
  }
}
