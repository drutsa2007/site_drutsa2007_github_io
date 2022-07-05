import style from './DockerIndex.module.css';
import data from '../../data/docker_data';
import {Link} from "react-router-dom";
import PageTitle from "../../UI/PageTitle";

const DockerIndex = () => {
  return (
    <div>
      <PageTitle>Содержание</PageTitle>
      {data.map((item, idx) => 
        <div key={idx} className={style.links}>
          <Link to={`/docker/${item.name.toLowerCase()}`} className={style.link}>
            {item.caption}
          </Link>
        </div>
      )}
    </div>
  );
}

export default DockerIndex;