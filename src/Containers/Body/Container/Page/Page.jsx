import style from './Page.module.css';

const Page = ({children}) => {
  return (
    <div className={style.page}>
        {children}
    </div>
  );
}

export default Page;