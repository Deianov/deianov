import { Injectable } from '@angular/core';
import adaptPrivateData from '@features/private/private.data.adapter';
import { IPrivate, IPrivateAdapted } from '@features/private/private.model';
import IProject from '@features/projects/project.model';

import { private_data, projects } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getProjects(): Promise<readonly IProject[]> {
    return Promise.resolve(projects);
  }

  getPrivateData(): Promise<IPrivateAdapted> {
    return Promise.resolve(private_data).then((data: IPrivate) => adaptPrivateData(data));
  }
}
