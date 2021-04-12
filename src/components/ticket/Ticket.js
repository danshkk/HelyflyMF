import s from './Ticket.module.scss';

function Ticket(props) {
  return (
    <div className={props.className}>
      <span className={s.time}>{props.time}</span>
      <span className={s.price}>{props.price}</span>
      <span className={s.access}>{props.access}</span>
      <button className={s.btn}>Выбрать</button>
    </div>
  );
}

export default Ticket;