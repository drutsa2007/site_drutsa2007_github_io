import style from './Breadcrumbs.module.css';
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import upperFirstLetter from '../../addons/upperFirstLetter';

const Breadcrumbs = () => {
  let location = useLocation();
  const path = location.pathname.split("/")
  let paths = [{url: "/", name: "Home"}]
  for (let i=1; i<path.length-1; i++) {
    paths.push({url: "/"+path[i].toLowerCase(), name: upperFirstLetter(path[i])})
  }
  let path_end = upperFirstLetter(path[path.length-1])
  return (
    <div>
      <div className={style.breadcrumbs}>
        {paths.map((item,idx) => <Link key={idx} to={item.url}>{item.name}</Link>)}
        <span>{path_end}</span>
      </div>
    </div>
  );
}

export default Breadcrumbs;