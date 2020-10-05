interface Factory {
  name: string;
  location: string;
  coordinates: number[];
}

export interface Iinspection {
  factory: Factory[];
}
