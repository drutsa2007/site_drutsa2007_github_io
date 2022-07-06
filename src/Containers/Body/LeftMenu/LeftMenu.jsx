import style from './LeftMenu.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCheck, faDollar, faMessage, faEnvelope, faFolder} from "@fortawesome/free-solid-svg-icons";

const LeftMenu = () => {
  return (
    <div className={style.menu}>
      <div className={style.topicons}>
        <FontAwesomeIcon icon={faBars} className={style.icon}/>
        <FontAwesomeIcon icon={faCheck} className={style.icon}/>
        <FontAwesomeIcon icon={faDollar} className={style.icon}/>
        <FontAwesomeIcon icon={faMessage} className={style.icon}/>
        <FontAwesomeIcon icon={faEnvelope} className={style.icon}/>
      </div>
      <div className={style.bottomicons}>
        <FontAwesomeIcon icon={faFolder} className={style.icon}/>
      </div>
    </div>
  );
}

export default LeftMenu;