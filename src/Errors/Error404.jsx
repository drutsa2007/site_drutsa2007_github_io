import style from './Error404.module.css';
import {Link} from 'react-router-dom';

const Error404 = () => {
  return (
    <div className={style.wrap}>
      <div className={style.back}>
        <div className={style.site}>THIS SITE SEND ERROR <span>0x2fe34a</span></div>
        <div className={style.status}>STATUS: <span>THIS PAGE DOESN'T EXISTS</span></div>
        <div className={style.n1}>
          <div className={style.number}><b>CODE:</b> <span>404</span></div>
          <div className={style.message}><b>MESSAGE:</b> <span>PAGE NOT FOUND</span></div>
        </div>
        <div className={style.error}>ERROR</div>
        <div className={style.link}><Link to="/">GO HOME</Link></div>
      </div>
    </div>
  );
}

export default Error404;