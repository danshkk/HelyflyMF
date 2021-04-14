import BlockTitle from '../../components/blockTitle/BlockTitle';
import Reviews from '../../components/reviews/Reviews';
import Ticket from '../../components/ticket/Ticket';
import s from './Tickets.module.scss';

function Tickets() {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.title}>
          <BlockTitle
          className={s.blockTitle}
            title="Доступная съемка в ближайшее время:"
          />
        </div>
        <div className={s.date}>
          <p className={s.dateTime}>Пятница, 14 сентября</p>
        <Ticket
          time="15:00 - 18:00"
          price="850$"
          access="Осталось — 1 место"
        />
        <Ticket
          time="19:00 - 22:00"
          price="850$"
          access="Осталось — 1 место"
        />
        <Reviews />
        </div>
      </div>
    </div>
  );
}

export default Tickets;