import CircularProgress from '@mui/material/CircularProgress';

import styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <CircularProgress color="inherit" />
    </div>
  );
}

export default Loader;
