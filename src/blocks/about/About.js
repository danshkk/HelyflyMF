import s from './About.module.scss';
import avatar from '../../assets/image/aboutAvatar.png';

function About() {
  return (
    <div className={s.wrapper}>
      <div className={s.creator}>
        <img src={avatar} alt="" />
        <h4 className={s.name}>Марина Иванова</h4>
        <span>Фотограф</span>
        <a className={s.link} href="">Показать больше информации о фотографе</a>
      </div>
      <div className={s.description}>
        <div className={aboutMe}>
          <h4 className={s.title}>Об организаторе:</h4>
          <p className={s.text}>Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов туристической отрасли, которые хорошо разбираются в маркетинге, операциях и услугах обслуживания клиентов, специализирующихся на совместном использовании и частных турах. <span></span> Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение,которое соответствует бюджету и планам клиента. Мы никогда не зависим от субпоставщиков и не свяжемся…</p>
          <a className={s.link} href="">Читать еще</a>
        </div>
        <div className={s.responsibilities}>
          <h4 className={s.title}>Что я предоставлю:</h4>
          <p className={s.text}>Встречу вас на машине после длительного перелёта. Качественный подбор места и локации для вашей съемки. При необходимости всегда возможно прерваться на обед/ужин. Более 50 фотографий на выходе с обработкой и замечательные впечатления о Дубае!</p>
          <a className={s.link} href="">Читать еще</a>
        </div>
      </div>
    </div>
  );
}

export default About;