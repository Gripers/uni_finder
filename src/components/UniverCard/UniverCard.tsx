import styles from './UniverCard.module.scss';

import Image from 'next/image';

import { IUniver } from '@/types/univer.types';

const UniverCard = ({ univer }: { univer: IUniver }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__left}>
        <h2>{univer.name}</h2>
        <div className={styles.mini__form}>
          <div>
            <label htmlFor='salary'>Average salary</label>
            <input
              type='text'
              id='salary'
              disabled
              value={`$${univer?.salary}`}
            />
          </div>
          <div>
            <label htmlFor='fees'>Tuition fees</label>
            <input type='text' id='fees' disabled value={`$${univer?.fees}`} />
          </div>
          <div>
            <label htmlFor='rate'>Acceptance rate</label>
            <input type='text' id='rate' disabled value={`${univer?.rate}%`} />
          </div>
          <div>
            <label htmlFor='gmat'>Average GMAT score</label>
            <input type='text' id='gmat' disabled value={`${univer?.gmat}`} />
          </div>
          <div>
            <label htmlFor='gre'>Average GRE score</label>
            <input type='text' id='gre' disabled value={`${univer?.gre}`} />
          </div>
          <div>
            <label htmlFor='gpa'>Average SPA</label>
            <input type='text' id='gpa' disabled value={`${univer?.gpa}`} />
          </div>
        </div>
        <button>View More</button>
      </div>
      <div className={styles.item__right}>
        <Image src={univer?.image} alt='' />
      </div>
    </div>
  );
};

export default UniverCard;
