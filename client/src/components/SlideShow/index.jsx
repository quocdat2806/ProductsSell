/* eslint-disable react/prop-types */
import Slider from "react-slick";
import classNames from "classNames/bind";
import styles from "./Slideshow.module.scss";
const cx = classNames.bind(styles);
export const SlideShowImage = ({slide})=>{
  return(
    <div style={{ background: `${slide.backGround}`}} className={cx('Slideshow_item')}>
      <div className={cx('Slideshow_left')}>
        <h2 className={cx('Slideshow_heading')}>
          <a href="">{slide.heading}</a>
        </h2>
        <p className={cx('Slideshow_desc')}>{slide.description}</p>
        <div>
          <a className={cx('Slideshow_ctaBtn')}
            rel="noreferrer noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/f8vnofficial"
          >
            {slide.button}
          </a>
        </div>
      </div>

      <div className={cx('Slideshow_right')}>
        <a href="">
          <img className={cx('Slideshow_img')} src={slide.img} alt="" />
        </a>
      </div>
    </div>
  )
}

const PrevArrow = ({onClick}) => {
  return (
    <div className={cx("Slideshow_arrow","Slideshow_prev")} onClick={onClick}>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="chevron-left"
        className="svg-inline--fa fa-chevron-left "
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
        ></path>
      </svg>
    </div>
  );
};

const NextArrow = ({onClick}) => {
  return (
    <div className={cx("Slideshow_arrow","Slideshow_next")} onClick={onClick}>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="chevron-right"
        className="svg-inline--fa fa-chevron-right "
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
        ></path>
      </svg>
    </div>
  );
};

const SlideShow = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
   
  };
  return (
    <div className={cx("Slideshow_wrapper")}>
    <Slider {...settings}>
      {data.map((item, index) => (
        <div  key={index}>{item}</div>
      ))}
    </Slider>
  </div>
  );
};

export default SlideShow;
