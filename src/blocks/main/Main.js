import s from './Main.module.scss';

function Main() {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}> 
        Эксклюзивная <span>фотосессия</span> при полете на вертолете
      </h3>
      <div>clippath</div>
      <button>Забронировать место</button>
    </div>
  );
}

export default Main;