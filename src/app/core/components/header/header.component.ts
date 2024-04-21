import {Component, inject, model, ModelSignal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MobileService} from '@core/services/mobile.service';
import {ThemeService} from '@core/services/theme.service';

import {NavComponent} from '../nav/nav.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, NavComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    private themeService = inject(ThemeService);
    private mobileService = inject(MobileService);

    theme: ModelSignal<string> = model.required<string>();

    showMenuTrigger = this.mobileService.isMobile();
    showMenu = !this.showMenuTrigger;

    themeToggle() {
        this.themeService.themeToggle();
        this.theme.set(this.themeService.currentTheme);
    }

    onResize = (event: Event) => {
        this.showMenuTrigger = this.mobileService.isMobile();
        this.showMenu = !this.showMenuTrigger;
    };
}
