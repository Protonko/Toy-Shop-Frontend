// types
import {IImageThumbnails} from 'models/interfaces';

export const getThumbnails = (array: Array<string>): Array<IImageThumbnails> => (
  array.map(elem => ({
    original: elem,
    thumbnail: elem,
  }))
);
