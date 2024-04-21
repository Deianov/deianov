export interface IPrivate {
  title: string;
  floor_rooms: string;
  floor_areas: number[];
  floor_total_text: string;
  attic_rooms: string;
  attic_areas: number[];
  attic_total_text: string;
  google: string;
}

export interface IPrivateAdapted {
  title: string;
  floor_rooms: string[];
  floor_areas: string[];
  floor_total_text: string[];
  attic_rooms: string[];
  attic_areas: string[];
  attic_total_text: string[];
  google: string;
}
