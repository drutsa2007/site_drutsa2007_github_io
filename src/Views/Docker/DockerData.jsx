import style from './DockerData.module.css';
import PageTitle from "../../UI/PageTitle";
import {useParams} from "react-router-dom";
import data from '../../data/docker_data';
import Error from '../../Errors/Error';

const DockerData = () => {
  const {route} = useParams()
  const filtered_data = data.filter((el) => el.name.toLowerCase() === route)[0];
  if (!filtered_data) return <Error>Не удается найти данные.</Error>
  return (
    <div>
      <PageTitle>{filtered_data.caption}</PageTitle>
      <div className={style.text}>
        {filtered_data.data.map((item, idx) => 
          <div key={idx} className={style.command}>
            <code>{item[0]}</code>
            <span>{item[1]}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default DockerData;