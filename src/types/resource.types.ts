import { StaticImageData } from 'next/image';

export interface IResource {
  id: number;
  name: string;
  founder: string;
  price: string | number;
  image: StaticImageData;
}
