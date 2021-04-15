import s from './FeedItem.module.scss';
import rate from '../../assets/image/reviewsStars.svg';
import mark from '../../assets/image/feedbackMark.png';

function FeedItem(props) {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <img className={s.avatar} src={props.avatar} alt="" />
        <div className={s.boxAbout}>
          <span className={s.name}>{props.name}</span>
          <span className={s.profession}>{props.profession}</span>
          <img className={s.rate} src={rate} alt="" />
        </div>
      </div>
      <div className={s.inner}>
        <img src={mark} alt="" />
        <p className={s.innerText}>Супер! Я бы заказала съемку снова!</p>
      </div>
      <div className={s.wrapper}>
        <p className={s.text}>{props.text}</p>
        <span className={s.date}>{props.date}</span>
      </div>
    </div>
  );
}

export default FeedItem;