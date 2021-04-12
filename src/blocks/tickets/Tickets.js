import BlockTitle from '../../components/blockTitle copy/BlockTitle';
import Reviews from '../../components/reviews/Reviews';
import Ticket from '../../components/ticket/Ticket';
import s from './Tickets.module.scss';

function Tickets() {
  return (
    <div className={s.wrapper}>
      <BlockTitle
      title = "Доступная съемка в ближайшее время"
      />
      <div className={s.date}>
        <p className={s.dateTime}>Пятница, 14 сентября</p>
      </div>
      <Ticket
      className = {s.date1}
      time = "15:00 - 18:00"
      price = "850$"
      access = "Осталось — 1 место"
      />
      <Ticket
      className = {s.date2}
      time = "19:00 - 22:00"
      price = "850$"
      access = "Осталось — 1 место"
      />
      <Reviews/>
    </div>
  );
}

export default Tickets;