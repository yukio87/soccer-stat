import { Link } from 'react-router-dom';

import styles from './ItemCard.module.scss';
import useScreenSize from '../../customHooks/useScreenSize';
import { WIDTH_SCREEN_MD } from '../../utils/constants';

function ItemCard({ item }) {
  const { width } = useScreenSize();

  return (
    <Link to={`/teams/${item.id}`} className={styles.itemCardWrapper}>
      <div className={styles.itemCard}>
        <p>{width <= WIDTH_SCREEN_MD ? item.shortName : item.name}</p>
        <div className={styles.imgWrapper}>
          <img src={item.crest} alt={item.name} />
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
