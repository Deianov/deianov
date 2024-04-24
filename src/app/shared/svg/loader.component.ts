import {Component, input} from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-loader',
    templateUrl: './loader.component.svg',
    styles: `
    :host  {
        display: flex;
        justify-content: center;
        text-align: center;
    }
    .dark-theme :host {
      fill: white;
    }
    .light-theme :host {
      fill: black;
    }
    `,
})
export class LoaderComponent {
    private defaultSize = 48;
    size = input<number>(this.defaultSize);
    color = input<string>();
}
