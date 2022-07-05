//import style from './Docker.module.css';
import Container from "../../Layouts/Container";
import {Outlet} from "react-router-dom";
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';

const Docker = () => {
  return (
    <Container>
      <Breadcrumbs/>
      <Outlet />
    </Container>
  );
}

export default Docker;