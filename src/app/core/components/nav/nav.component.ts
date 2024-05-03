import { Component, model } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.css',
})
export class NavComponent {
    showMenu = model.required<boolean>();
    showMenuTrigger = model.required<boolean>();

    autoCloseOnMobile() {
        if (this.showMenuTrigger() && this.showMenu()) {
            this.showMenu.set(false);
        }
    }
}
