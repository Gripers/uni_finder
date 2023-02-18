import { StaticImageData } from 'next/image';

export interface IService {
  pic: StaticImageData;
  title: string;
  description: string;
}
