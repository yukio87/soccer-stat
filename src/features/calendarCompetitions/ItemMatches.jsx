import styles from './ItemMatches.module.scss';
import { formatDate, formatTime } from '../../utils/helpers';
import useScreenSize from '../../customHooks/useScreenSize';
import { WIDTH_SCREEN_MD } from '../../utils/constants';

function ItemMatches({ item }) {
  const { width } = useScreenSize();

  return (
    <li className={styles.item}>
      <p>{formatDate(item.utcDate)}</p>
      <p className={styles.time}>{formatTime(item.utcDate)}</p>
      <p className={styles.status}>{item.status}</p>
      <p className={styles.names}>
        <span>{width <= WIDTH_SCREEN_MD ? item.homeTeam.shortName : item.homeTeam.name}</span>
        <span> - </span>
        <span>{width <= WIDTH_SCREEN_MD ? item.awayTeam.shortName : item.awayTeam.name}</span>
      </p>
      <p className={styles.score}>
        {item.status === 'FINISHED'
          ? `${item.score.fullTime.home} : ${item.score.fullTime.away}`
          : '-'}
      </p>
    </li>
  );
}

export default ItemMatches;
