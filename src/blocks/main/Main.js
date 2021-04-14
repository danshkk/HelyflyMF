import s from './Main.module.scss';
import sale from '../../assets/image/mainSale.png';

function Main(props) {
  return (
    <div className={s.main}>
          <div className={s.container}>
        <h1 className={s.title}>
          Эксклюзивная <span>фотосессия</span> при полете на вертолете
      </h1>
        <img src={sale} alt=""/>
        <button className={s.btn}>Забронировать место</button>
    </div>
    </div>
  );
}

export default Main;