import { useContext } from 'react';

import styles from './FilterMatches.module.scss';
import { CalendarCompetitionsContext } from './CalendarCompetitions';

function FilterMatches() {
  const { dateQueryFrom, setDateQueryFrom, dateQueryTo, setDateQueryTo } = useContext(
    CalendarCompetitionsContext,
  );

  return (
    <div className={styles.filterMatches}>
      <span>
        С{' '}
        <input type="date" value={dateQueryFrom} onChange={e => setDateQueryFrom(e.target.value)} />
      </span>
      <span>
        по <input type="date" value={dateQueryTo} onChange={e => setDateQueryTo(e.target.value)} />
      </span>
    </div>
  );
}

export default FilterMatches;
