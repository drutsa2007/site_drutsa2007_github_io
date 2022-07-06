import Body from '../Containers/Body/Body';
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
const techno = [
  {url: '/rabbitmq', name: "RabbitMQ"},
  {url: '/kafka', name: "Kafka"},
  {url: '/postgresql', name: "PostgreSQL"},
  {url: '/mysql', name: "MySQL"},
  {url: '/redis', name: "Redis"},
  {url: '/mongodb', name: "MongoDB"},
  {url: '/reactnative', name: "React Native"},
  {url: '/kotlin', name: "Kotlin"},
  {url: '/nginx', name: "Nginx"},
  {url: '/ngrok', name: "Ngrok"},
  {url: '/graphql', name: "GraphQL"},
  {url: '/restapi', name: "REST API"},
  {url: '/swagger', name: "Swagger"},
  {url: '/websockets', name: "WebSockets"},
  {url: '/http', name: "HTTP"},
  {url: '/tcpip', name: "TCP/IP"},
  {url: '/scss', name: "SCSS"},
  {url: '/sass', name: "SASS"},
  {url: '/django', name: "Django"},
  {url: '/drf', name: "DRF"},
  {url: '/flask', name: "Flask"},
  {url: '/typescript', name: "TypeScript"},
  {url: '/clickhouse', name: "ClickHouse"},
  {url: '/three', name: "Three.js"},
  {url: '/flutter', name: "Flutter"},
  {url: '/jquery', name: "JQuery"},
  {url: '/webpack', name: "Webpack"},
  {url: '/bebel', name: "Bebel"},
]

const Main = () => {
  return (
    <Body>
      <div className={style.icons}>
        {brands.map((item, idx) => 
          <Link key={idx} to={item.url}>
            <FontAwesomeIcon icon={item.icon} className={style.icon}/>
          </Link>
        )}
      </div>
      <div className={style.technos}>
        {techno.map((item, idx) => 
          <Link key={idx} to={item.url} className={style.techno}>
            {item.name}
          </Link>
        )}
      </div>
    </Body>
  );
}

export default Main;