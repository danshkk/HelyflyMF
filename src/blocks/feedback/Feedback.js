import FeedItem from '../../components/feedItem/FeedItem';
import s from './Feedback.module.scss';
import avatar1 from '../../assets/image/feedbackAvatar1.png';
import avatar2 from '../../assets/image/feedbackAvatar2.png';
import avatar3 from '../../assets/image/feedbackAvatar3.png';
import BlockTitle from '../../components/blockTitle/BlockTitle';


function Feedback() {
  return (
    <div className={s.container}>
      <BlockTitle
      className = {s.title}
      title = 'Отзывы'
      />
      <div className={s.feeds}>
      <FeedItem
      avatar = {avatar1}
      name = 'Валерия Антонова'
      profession = 'Фотограф'
      text = 'Восторг! Очень понравилось Захватили последний теплый, солнечный октябрьский день  Впечатлило всё: сам вертолет, взлет, полёт, приземление! Организация полёта отличная! Спасибо!'
      date = '19 Апреля, 2019г.'
      />
      <FeedItem
      avatar = {avatar2}
      name = 'Виталий Петров'
      profession = 'Арт-директор'
      text = 'Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!'
      date = '27 Апреля, 2019г.'
      />
      <FeedItem
      avatar = {avatar3}
      name = 'Джим Керринг'
      profession = 'Арт-директор'
      text = 'Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытнымиМы с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!! А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!'
      />
      </div>
      <a className={s.link} href="">Показать Все</a>
    </div>
  );
}

export default Feedback;