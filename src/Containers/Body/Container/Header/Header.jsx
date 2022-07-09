import style from './Header.module.css';
import SwitchTheme from '../../../../Components/SwitchTheme/SwitchTheme';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.wrap}>
        <div className={style.wrap1}>
          <div className={style.logo}>
            <Link to="/">CheatSheet</Link>
          </div>
        </div>
        <SwitchTheme/>
      </div>
    </div>
  );
}

export default Header;