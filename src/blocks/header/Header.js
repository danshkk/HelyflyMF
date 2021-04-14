import s from './Header.module.scss';
import logo from '../../assets/image/logo.svg'
import user from '../../assets/image/user.png'

function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.inner}>
          <div className={s.wrapper}>
            <img src={logo} alt="HELYFLY" className={s.logo} />
            <a href="tel: +8(800)-123-12-12" className={s.city}>Москва</a>
            <div className={s.number}>
              <span>Телефон:</span>
              <a href="tel: +8(800)-123-12-12" className={s.phoneLink}>+8(800)-123-12-12</a>
            </div>
          </div>
          <a className={s.user} href="#" >
            <img src={user} alt="" className={s.userImg} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;