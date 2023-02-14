import styles from './Resourses.module.scss';

import { IResource } from '@/types/resource.types';
import courses_db from '@/db/courses.db';
import books_db from '@/db/books.db';
import articles_db from '@/db/articles.db';
import Navbar from '@/components/Navbar/Navbar';
import ResourceItem from '@/components/ResourceItem/ResourceItem';
import Footer from '@/components/Footer/Footer';

const Resourses = () => {
  return (
    <>
      <Navbar />
      <section className={styles.courses}>
        <h1>Courses</h1>
        <p>We give you all necessary courses so you can reach your goal</p>
        <div className={styles.wrapper}>
          {courses_db?.map((course: IResource) => (
            <ResourceItem obj={course} key={course?.id} />
          ))}
        </div>
      </section>
      <section className={styles.books}>
        <h1>Books</h1>
        <p>We give you all necessary books so you can reach your goal</p>
        <div className={styles.wrapper}>
          {books_db?.map((book: IResource) => (
            <ResourceItem obj={book} key={book?.id} />
          ))}
        </div>
      </section>
      <section className={styles.articles}>
        <h1>Articles</h1>
        <p>
          We give and update for you all necessary information so you can reach
          your goal
        </p>
        <div className={styles.wrapper}>
          {articles_db?.map((article) => (
            <ResourceItem obj={article} key={article?.id} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Resourses;
