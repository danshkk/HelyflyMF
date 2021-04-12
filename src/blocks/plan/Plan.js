import s from './Plan.module.scss';
import map from '../../assets/image/planBg.png';
import avatar from '../../assets/image/aboutAvatar.png'

function Plan() {
  return (
    <div className={s.wrapper}>
      <img src={map} alt=""/>
      <div className={s.stages}>
        <div className={s.steps}>
          <div className={s.step}>
            <div className={s.item}>1</div>
            <div className={s.itemInner}>
              <span className={s.itemTitle}>Где встречаемся?</span>
              <span className={s.itemText}>Москва</span>
            </div>
          </div>
          <div className={s.step}>
            <div className={s.item}>1</div>
            <div className={s.itemInner}>
              <span className={s.itemTitle}>Время съемки</span>
              <span className={s.itemText}>3 часа</span>
            </div>
          </div>
          <div className={s.step}>
            <div className={s.item}>1</div>
            <div className={s.itemInner}>
              <span className={s.itemTitle}>Мест осталось:</span>
              <span className={s.itemText}>2 места</span>
            </div>
          </div>
          <div className={creator}>
            <img src={avatar} alt=""/>
            <div className={creatorAbout}>
              <h4 className={s.name}>Мария Иванова</h4>
              <span className={s.position}>Фотограф</span>
              <a className={s.link} href="">Показать больше информации</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;