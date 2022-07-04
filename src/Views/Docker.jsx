//import style from './Docker.module.css';
import Container from "../Layouts/Container";

const Docker = () => {
  return (
    <Container>
      docker run -d IMAGE - скачает образ из dicker hub если его нет локально<br/>
      docker search SEARCH - поиск в docker hub по значению
    </Container>
  );
}

export default Docker;