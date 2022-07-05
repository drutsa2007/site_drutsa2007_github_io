import style from './Container.module.css';
import Header from '../Containers/Header/Header';
import Footer from '../Containers/Footer/Footer';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCheck, faDollar, faMessage, faEnvelope, faFolder} from "@fortawesome/free-solid-svg-icons";

const Container = ({children}) => {
  return (
    <div className={style.container}>
      <div className={style.menu}>
        <FontAwesomeIcon icon={faBars} className={style.icon}/>
        <FontAwesomeIcon icon={faCheck} className={style.icon}/>
        <FontAwesomeIcon icon={faDollar} className={style.icon}/>
        <FontAwesomeIcon icon={faMessage} className={style.icon}/>
        <FontAwesomeIcon icon={faEnvelope} className={style.icon}/>
      </div>
      <div className={style.page}>
        <Header/>
        <div className={style.content}>
          {children}
        </div>
        <Footer/> 
      </div>
    </div>
  );
}

export default Container;