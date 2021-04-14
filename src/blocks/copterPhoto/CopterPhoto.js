
import s from './CopterPhoto.module.scss';
import photoMain from '../../assets/image/copterPhotoImgMain.png';
import photo1 from '../../assets/image/copterPhotoImg1.png';
import photo2 from '../../assets/image/copterPhotoImg2.png';
import photo3 from '../../assets/image/copterPhotoImg3.png';
import photo4 from '../../assets/image/copterPhotoImg8.png';
import photo5 from '../../assets/image/copterPhotoImg5.png';
import photo6 from '../../assets/image/copterPhotoImg6.png';
import photo7 from '../../assets/image/copterPhotoImg7.png';
import BlockTitle from '../../components/blockTitle/BlockTitle';


function CopterPhoto() {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <BlockTitle
          className={s.BlockTitle}
          title='Фотографии пакета'
        />
      </div>
      <div className={s.inner}>
        <img src={photoMain} alt="" />
        <img src={photo1} alt="" />
        <img src={photo2} alt="" />
        <img src={photo3} alt="" />
        <img src={photo4} alt="" />
        <img src={photo5} alt="" />
        <img src={photo6} alt="" />
        <img src={photo7} alt="" />
      </div>
      <a className={s.link} href="">Показать все фото</a>
    </div>
  );
}

export default CopterPhoto;