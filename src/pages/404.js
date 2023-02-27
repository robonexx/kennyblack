import SideScroll from '@/components/sidescrollanimation/SideScroll';
//import styles
import styles from '../styles/PageNotFound.module.scss';

export default function PageNotFound() {
  return (
    <div className={styles.pagenotfound}>
      <h1>404 PAGE NOT FOUND</h1>
      <SideScroll />
    </div>
  );
}
