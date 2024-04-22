import {Component, inject, input} from '@angular/core';
import {ThemeService} from '@core/services/theme.service';

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
    `,
})
export class LoaderComponent {
    private defaultColor = inject(ThemeService).isDark ? 'white' : 'black';
    private defaultSize = 48;
    color = input<string>(this.defaultColor);
    size = input<number>(this.defaultSize);
}
