import style from './Header.module.css';
import SwitchTheme from '../../../../Components/SwitchTheme/SwitchTheme';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import BurgerMenu from '../../../../Components/BurgerMenu/BurgerMenu';
import { useState } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(true)
  return (
    <div className={style.header}>
      <div className={style.wrap}>
        <div className={style.wrap1}>
          <FontAwesomeIcon icon={faBars} className={style.burger}  onClick={() => {setShowMenu(!showMenu)}}/>
          <BurgerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
          
          <div className={style.logo}>
            <Link to="/">drutsa2007</Link>
          </div>
        </div>
        <SwitchTheme/>
      </div>
    </div>
  );
}

export default Header;