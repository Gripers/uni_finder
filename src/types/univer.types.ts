import { StaticImageData } from 'next/image';

export interface IUniver {
  id: number;
  name: string;
  image: StaticImageData;
  salary: number | null;
  fees: number | null;
  rate: number | null;
  gmat: number | null;
  gre: number | null;
  gpa: number | null;
}
