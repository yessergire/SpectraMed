export interface Area {
  id: number;
  name: string;
  frequencies: number[];
}

export interface Spectra {
  x: number;
  y: number;
}

export interface Spectrum {
  id: string;
  date: string;
  spectrum: Spectra[];
}