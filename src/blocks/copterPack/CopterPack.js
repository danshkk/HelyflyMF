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
      <BlockTitle
        title = 'Фотосессия в вертолете'
      />
      <img src={copterPackBg} alt=""/>
      <div className={s.description}>
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
      </div>
      <Reviews/>
    </div>
  );
}
export default CopterPack;