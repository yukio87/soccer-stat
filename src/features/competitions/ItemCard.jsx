import { Link } from 'react-router-dom';

import styles from './ItemCard.module.scss';

function ItemCard({ item }) {
  return (
    <Link to={`/soccer-stat/${item.id}`} className={styles.itemCardWrapper}>
      <div className={styles.itemCard}>
        <p>{item.name}</p>
        <p>{item.area.name}</p>
      </div>
    </Link>
  );
}

export default ItemCard;
