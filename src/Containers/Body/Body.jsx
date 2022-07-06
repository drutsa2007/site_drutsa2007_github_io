import style from './Body.module.css';
import LeftMenu from './LeftMenu/LeftMenu';
import Container from './Container/Container';

const Body = ({children}) => {
  return (
    <div className={style.body}>
      <LeftMenu/>
      <Container>{children}</Container>
    </div>
  );
}

export default Body;