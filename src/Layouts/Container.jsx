import style from './Container.module.css';
import Header from '../Containers/Header/Header'
import Footer from '../Containers/Footer/Footer'

const Container = ({children}) => {
  return (
    <div>
      <Header/>
      <div className={style.container}>
          {children}
      </div>
      <Footer/>
    </div>
  );
}

export default Container;