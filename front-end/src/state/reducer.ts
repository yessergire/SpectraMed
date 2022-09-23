import { State } from "./state";
import { Area, Spectra } from "../types";

export type Action =
  | {
      type: "SET_AREA_LIST";
      payload: Area[];
    }
  | {
      type: "SET_SPECTRUM";
      payload: {
        [area: number]: Spectra[]
      };
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_AREA_LIST":
      return {
        ...state,
        areas: {
          ...action.payload.reduce(
            (memo, area) => ({ ...memo, [area.id]: area }),
            {}
          ),
          ...state.areas
        }
      };
    case "SET_SPECTRUM":
      return {
        ...state,
        spectrum: {
          ...action.payload,
          ...state.spectrum
        }
      };
    default:
      return state;
  }
};

export const setAreaList = (areaList: Area[]): Action => {
  return {
    type: 'SET_AREA_LIST',
    payload: areaList
  };
};

export const setSpectrum = (area: number, spectrum: Spectra[]): Action => {
  return {
    type: 'SET_SPECTRUM',
    payload: { [area]: spectrum }
  };
};