import s from './Plan.module.scss';
import avatar from '../../assets/image/aboutAvatar.png'

function Plan() {
  return (
    <>
      <div className={s.containerBg}>
          <div className={s.wrapper}>
            <div className={s.plans}>
                <div className={s.item}>
                  <div className={s.circle}>1</div>
                  <div className={s.inner}>
                    <span className={s.title}>Где встречаемся?</span>
                    <span>Москва</span>
                  </div>
                </div>
                <div className={s.item}>
                  <div className={s.circle}>2</div>
                  <div className={s.inner}>
                    <span className={s.title}>Время съемки</span>
                    <span className={s.subtitle}>3 часа</span>
                  </div>
                </div>
                <div className={s.item}>
                  <div className={s.circle}>3</div>
                  <div className={s.inner}>
                    <span className={s.title}>Мест осталось</span>
                    <span className={s.subtitle}>2 места</span>
                  </div>
                </div>
                <div className={s.item}>
                  <img src={avatar} alt=""/>
                  <div className={s.inner}>
                    <span className={s.name}>Мария Иванова</span>
                    <span className={s.respons}>Фотограф</span>
                    <a className={s.link} href="">Показать больше информации</a>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <div className={s.cont}>
        <div className={s.wrap}></div>
      </div>
    </>
  );
}

export default Plan;