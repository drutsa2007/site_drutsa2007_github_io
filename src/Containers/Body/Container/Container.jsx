import style from './Container.module.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Page from './Page/Page';

const Container = ({children}) => {
  return (
    <div className={style.container}>
        <Header/>
        <Page>{children}</Page>
        <Footer/>
    </div>
  );
}

export default Container;