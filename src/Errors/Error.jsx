import style from './Error.module.css';

const Error = ({children}) => {
  return (
    <div className={style.error}>
      {children}
    </div>
  );
}

export default Error;