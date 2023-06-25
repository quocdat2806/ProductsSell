import classNames from "classNames/bind";
import styles from "./Home.module.scss";
import ScrollList from '../../components/ScrollList';
import SlideShow from "../../components/SlideShow";
import { SlideShows } from "../../fakeData";
const cx = classNames.bind(styles);

const Home = () => {
  return (
    <>
       <div className={cx("Home_slideshow")}>
          <div className={cx("Home_slideshow-wrapper")}>
            <SlideShow  data={SlideShows} />
          </div>
        </div>
        <div className={cx('Home_wrapper')}>
          <ScrollList className={cx('Home_courseItem')}/>
          <ScrollList className={cx('Home_courseItem')}/>
          <ScrollList className={cx('Home_courseItem')}/>
          <ScrollList className={cx('Home_courseItem')}/>


          

        </div>
     
    </>
  )
}

export default Home