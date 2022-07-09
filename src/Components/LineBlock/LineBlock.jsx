import style from './LineBlock.module.css';

const LineBlock = ({children}) => {
  return (
    <div className={style.wrap}>
        <div className={style.start}></div>
        <div className={style.text}>{children}</div>
        <div className={style.end}></div>
    </div>
  );
}

export default LineBlock;