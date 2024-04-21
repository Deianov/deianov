import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';

import {DataService} from '../../core/services/data.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [AsyncPipe, RouterLink],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
})
export class ProjectsComponent {
    projects = inject(DataService).getProjects();

    removeHttps(str: string) {
        return str.replace('https://', '');
    }
}
