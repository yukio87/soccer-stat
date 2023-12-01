import { useContext } from 'react';

import styles from './FilterDateContext.module.scss';

function FilterDate({ context }) {
  const { dateQueryFrom, setDateQueryFrom, dateQueryTo, setDateQueryTo } = useContext(context);

  return (
    <div className={styles.filterDate}>
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

export default FilterDate;
