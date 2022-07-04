import { Link } from 'react-router-dom';
import style from './BurgerMenu.module.css';
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BurgerMenu = ({showMenu, setShowMenu}) => {
  return (
    <div className={(showMenu) ? style.back : [style.back, style.backActive].join(" ")} onClick={() => {setShowMenu(!showMenu)}}>
      <div className={(showMenu) ? style.menu : [style.menu, style.menuActive].join(" ")} onClick={(e) => {e.stopPropagation()}}>
        <FontAwesomeIcon icon={faXmark} className={style.close} onClick={()=>{setShowMenu(!showMenu)}}/>
        <Link to="/" className={style.link}>Ссылка</Link>
        <Link to="/" className={style.link}>Ссылка</Link>
        <Link to="/" className={style.link}>Ссылка</Link>
        <Link to="/" className={style.link}>Ссылка</Link>
        <Link to="/" className={style.link}>Ссылка</Link>
      </div>
    </div>
  );
}

export default BurgerMenu;