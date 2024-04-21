import { toUTF8 } from '@shared/utils/strings';

import { IPrivate, IPrivateAdapted } from './private.model';

export default function adaptPrivateData(data: IPrivate): IPrivateAdapted {
  return {
    title: toUTF8(data.title),
    floor_rooms: toUTF8(data.floor_rooms).split(';'),
    floor_areas: data.floor_areas.map((n) => n.toFixed(2)),
    floor_total_text: toUTF8(data.floor_total_text).split(';'),
    attic_rooms: toUTF8(data.attic_rooms).split(';'),
    attic_areas: data.attic_areas.map((n) => n.toFixed(2)),
    attic_total_text: toUTF8(data.attic_total_text).split(';'),
    google: data.google,
  };
}
