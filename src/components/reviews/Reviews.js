import s from './Reviews.module.scss';
import cup from '../../assets/image/reviewsCup.svg';
import rating from '../../assets/image/reviewsStars.svg';

function Reviews() {
  return (
    <div className={s.wrapper}>
      <img className={s.imgCup} src={cup} alt=""/>
      <div className={s.inner}>
        <p className={s.text}>Более 150 отзывов с оценкой</p>
        <img className={s.imgRating} src={rating} alt=""/>
      </div>
    </div>
  );
}

export default Reviews;