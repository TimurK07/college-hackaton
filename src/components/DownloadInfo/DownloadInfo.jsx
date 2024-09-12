import './DownloadInfo.css';

function DownloadInfo() {
  return (
    <div className="donwload__info">
      <div className="donwload__info__container container">
        <h1 className="donwload__info__title">Документация</h1>
        <div className="donwload__info__links">
          <div className="donwload__info__link__one link__one">
            <p className="link__one__par">Приказ</p>
            <div className="link__one__download__block">
              <a className='link__one__download__block__btn' href="#">Скачать</a>
              <img src="./public/img/arrow-right.svg" alt="" />
            </div>
          </div>
          <div className="donwload__info__link__one link__one">
            <p className="link__one__par">Положение</p>
            <div className="link__one__download__block">
              <a className='link__one__download__block__btn' href="#">Скачать</a>
              <img src="./public/img/arrow-right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default DownloadInfo;
