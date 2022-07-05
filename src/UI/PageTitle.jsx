import style from './PageTitle.module.css';

const PageTitle = ({children}) => {
  return (
    <div className={style.caption}>
      {children}
    </div>
  );
}

export default PageTitle;