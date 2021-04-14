import BlockTitle from '../../components/blockTitle/BlockTitle';
import s from './CopterPack.module.scss';
import copterPackBg from '../../assets/image/copterPackBG.png';
import time from '../../assets/image/copterPackTime.svg';
import camera from '../../assets/image/copterPackCamera.svg';
import location from '../../assets/image/copterPackLocation.svg';
import dialogs from '../../assets/image/copterPackDialogs.svg';
import Reviews from '../../components/reviews/Reviews';


function CopterPack() {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <BlockTitle
          className = {s.blockTitle}
          title='Фотосессия в вертолете'
        />
      </div>
      <img className={s.img} src={copterPackBg} alt=""/>
      <div className={s.description}>
        <p className={s.text}>Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный фотограф запечатлит лучшие моменты!</p>
        <div className={s.item}>
          <img src={time} alt=""/>
          <p>3 часа съемки</p>
        </div>
        <div className={s.item}>
          <img src={camera} alt=""/>
          <p>Более 50 фотографий</p>
        </div>
        <div className={s.item}>
          <img src={location} alt=""/>
          <p>Москва</p>
        </div>
        <div className={s.item}>
          <img src={dialogs} alt=""/>
          <p>Готовы ответить на любые вопросы</p>
        </div>
        <Reviews/>
      </div>
    </div>
  );
}
export default CopterPack;