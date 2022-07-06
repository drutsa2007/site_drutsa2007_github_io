//import style from './Docker.module.css';
import Body from "../../Containers/Body/Body";
import {Outlet} from "react-router-dom";
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';

const Docker = () => {
  return (
    <Body>
      <Breadcrumbs/>
      <Outlet />
    </Body>
  );
}

export default Docker;