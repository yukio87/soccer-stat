import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import SoccerLogo from './SoccerLogo';

function Header() {
  return (
    <header className={styles.header}>
      <SoccerLogo />

      <NavLink className={styles.navLink} to="/soccer-stat/" end>
        Лиги
      </NavLink>
      <NavLink className={styles.navLink} to="/soccer-stat/teams" end>
        Команды
      </NavLink>
    </header>
  );
}

export default Header;
