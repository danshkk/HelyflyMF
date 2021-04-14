import s from './Ticket.module.scss';

function Ticket(props) {
  return (
    <div className={s.ticket}>
      <div className={s.box}>
        <span className={s.time}>{props.time}</span>
        <span className={s.price}>{props.price}</span>
        <span className={s.access}>{props.access}</span>
      </div>
      <button className={s.btn}>Выбрать</button>
    </div>
  );
}

export default Ticket;