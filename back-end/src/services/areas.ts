import areasData from '../../data/areas.json';
import { Area } from '../types';

const getAreas = (): Array<Area> => {
  return areasData;
};

const getById = (id: number): Area | undefined => {
  return areasData.find(area => area.id === id);
};

export default {
  getAreas,
  getById,
};