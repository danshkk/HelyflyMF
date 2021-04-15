import s from './Footer.module.scss';
import logo from '../../assets/image/logo.svg';
import master from '../../assets/image/footerMasterCard.svg';
import visa from '../../assets/image/footerVisa.svg';
import vk from '../../assets/image/footerVK.svg';
import facebook from '../../assets/image/footerFacebook.svg';
import insta from '../../assets/image/footerInsta.svg';


function Footer() {
  return (
    <>
      <footer className={s.footer}>
        <div className={s.footerTop}>
          <img src={logo} alt="" />
          <div className={s.social}>
            <img src={vk} alt="" />
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
          </div>
        </div>
      </footer>
      <div className={s.container}>
        <div className={s.footerBottom}>
          <div className={s.partners}>
            <img src={master} alt="" />
            <img src={visa} alt="" />
          </div>
          <div className={s.language}>
            <select name="" id="">
              <option value="">RU</option>
              <option value="">ENG</option>
            </select>
          </div>
          <div className={s.rights}>
            <span className={s.number}>Тех. поддержка: 8(800)700-00-00</span>
            <span className={s.about}>© 2018 HELYFLY. All Rights Reserved.</span>
          </div>
        </div>
      </div>

      </>
  );
}

export default Footer;