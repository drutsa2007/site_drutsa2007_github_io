import style from './Ngrok.module.css';
import Body from "../../Containers/Body/Body";
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import PageTitle from "../../UI/PageTitle";
import info from '../../data/ngrok';

const Ngrok = () => {
  return (
    <Body>
      <Breadcrumbs/>
      <PageTitle>Информация</PageTitle>
      <ul>
        <li>Зайти на <a href="https://ngrok.com/download" target="_blank" rel="noreferrer">сайт</a> и скачать программу. </li>
        <li>Распаковать в любую папку.</li>
        <li>Для получения токена, необходимо зарегистрироваться.</li>
        <li>Запускать из папки, в которую распаковали.</li>
      </ul>
      <p>Можно сделать файл ngrok.yml с содержимым:</p>
      <div className={style.command}>
        <code>authtoken: TOKEN</code>
      </div>
      {info.map((item, idx) => {
        return (
          <div key={idx}>
            <PageTitle>{item.caption}</PageTitle>
            {item.data.map((k, idx1) => 
              <div key={idx1} className={style.command}>
                <code>{k[0]}</code>
                <span>{k[1]}</span>
              </div>
            )}
          </div>
        )
      })}
      Дальше запускаете свой URL-адрес:<br/>
      из пункта Forwarding:<br/><br/> https://ffff-999-999-999-999.pp.ngrok.io
      <br/><br/>
      Информация на сайте <a href="https://zen.yandex.ru/media/id/5f9ac31ac0a24c2787f6f456/ngrok-svoi-sait-v-internete-62c441b07286b12c3fce0a41" target="_blank" rel="noreferrer">сайте</a>

    </Body>
  );
}

export default Ngrok;