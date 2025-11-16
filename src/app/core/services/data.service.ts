import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import adaptPrivateData from '@features/private/private.data.adapter';
import { IPrivate, IPrivateAdapted } from '@features/private/private.model';
import IProject from '@features/projects/project.model';

import { private_data, projects } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);

  getJson<T = any>(url: string, initialValue: T) {
    return toSignal(this.http.get<T>(url), { initialValue });
  }

  getProjects(): Promise<readonly IProject[]> {
    return Promise.resolve(projects);
  }

  getPrivateData(): Promise<IPrivateAdapted> {
    return Promise.resolve(private_data).then((data: IPrivate) => adaptPrivateData(data));
  }
}
