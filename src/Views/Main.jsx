import Container from '../Layouts/Container';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDocker, faGitAlt, faLaravel, faReact, faVuejs, faBootstrap, faChrome,
faCss3Alt, faHtml5, faJira, faJs, faLinux, faPhp, faPython} from "@fortawesome/free-brands-svg-icons";
//import Button from '../UI/Button';
import style from './Main.module.css';
import { Link } from 'react-router-dom';

const brands = [
  {url: '/docker', icon: faDocker},
  {url: '/git', icon: faGitAlt},
  {url: '/laravel', icon: faLaravel},
  {url: '/react', icon: faReact},
  {url: '/vue', icon: faVuejs},
  {url: '/bootstrap', icon: faBootstrap},
  {url: '/chrome', icon: faChrome},
  {url: '/css3', icon: faCss3Alt},
  {url: '/html5', icon: faHtml5},
  {url: '/jira', icon: faJira},
  {url: '/js', icon: faJs},
  {url: '/linux', icon: faLinux},
  {url: '/php', icon: faPhp},
  {url: '/python', icon: faPython},
]

const Main = () => {
  return (
    <Container>
      <div className={style.icons}>
        {brands.map((item, idx) => 
          <Link key={idx} to={item.url}>
            <FontAwesomeIcon icon={item.icon} className={style.icon}/>
          </Link>
        )}
      </div>
    </Container>
  );
}

export default Main;