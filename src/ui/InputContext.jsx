import { useContext } from 'react';

import styles from './InputContext.module.scss';

function InputContext({ context }) {
  const { searchQuery, setSearchQuery } = useContext(context);

  return (
    <input
      type="text"
      className={styles.input}
      placeholder="Поиск"
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
    />
  );
}

export default InputContext;
