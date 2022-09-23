import spectrumJson from '../../data/spectrum.json';
import { Area, Spectra, Spectrum } from '../types';

const getSpectrumData = (area: Area): Spectra[] => {
  const [start, end] = area.frequencies;
  return (spectrumJson as Spectrum)
    .spectrum
    .filter((spectra: Spectra) =>
      spectra.x >= start && spectra.x <= end
    );
};

export default {
  getSpectrumData,
};