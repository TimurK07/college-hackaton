import './DownloadInfo.css';
import ArrowRight from '../../img/ArrowRight.svg';
import OrderDoc from '../../documents/order.pdf';
import PositionDoc from '../../documents/position.pdf'

function DownloadInfo() {
  return (
    <div className="donwload__info">
      <div className="donwload__info__container container">
        <h1 className="donwload__info__title">Документация</h1>
        <div className="donwload__info__links">
          <div className="donwload__info__link__one link__one">
            <p className="link__one__par">Приказ</p>
            <div className="link__one__download__block">
              <a className='link__one__download__block__btn' href={OrderDoc} download="Приказ">Скачать</a>
              <img className="arrow__icon" src={ArrowRight} alt="" />
            </div>
          </div>
          <div className="donwload__info__link__one link__one">
            <p className="link__one__par">Положение</p>
            <div className="link__one__download__block">
              <a className='link__one__download__block__btn' href={PositionDoc} download='Положение'>Скачать</a>
              <img className="arrow__icon" src={ArrowRight} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default DownloadInfo;
