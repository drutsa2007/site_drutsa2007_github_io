import Body from '../Containers/Body/Body';
import LineBlock from '../Components/LineBlock/LineBlock';
import style from './Main.module.css';
import { Link } from 'react-router-dom';
import info from '../data/technologies';

const Main = () => {
  return (
    <Body>
      {info.map((item, idx1) => 
        <div key={idx1}>
          <LineBlock>{item.caption}</LineBlock>
          <div className={style.technos}>
            {item.techno.map((t, idx2) => 
              <Link key={idx2} to={t.url} className={style.techno}>
                {t.caption}
              </Link>
            )}
          </div>
        </div>
      )}
    </Body>
  );
}

export default Main;