import classNames from "classNames/bind";
import styles from "./LearningPath.module.scss";
const cx = classNames.bind(styles);
import DefaultLayoutContainer from '../../layout/DefaultLayout/DefaultLayoutContainer'
import { Link } from 'react-router-dom';
import CircularProgressBar from '../../components/CircularProgressBar';
import Button from '../../components/Button';
import SuggestionBox from '../../components/SuggestionBox';

const LearningPath = () => {
  return (
    <DefaultLayoutContainer title="Lộ trình học"
    description="Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí Lập trình viên Front-end bạn nên tập trung vào lộ trình Front-end. "
    >
      <div className={cx('LearningPath_list-content')}>
        <div className={cx('LearningPath_item-wrapper')}>
          <div className={cx('LearningPath_item-body')}>
            <div className={cx('LearningPath_item-infor')}>
              <h2 className={cx('LearningPath_item-title')}>
                <Link href="">Lộ trình học Font-end</Link>

              </h2>
              <p className={cx('LearningPath_item-desc')}>
              Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.

              </p>
            </div>
            <div className={cx('LearingPath_item_thumb-wrap')}>
              <Link className={cx('LearningPath_item_thumb-round')}>
                <img className={cx('LearningPath_item-thumb')} src="https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png" alt="" />
              </Link>
            </div>

          </div>
          <div className={cx('LearningPath_item-cta')}>
           <CircularProgressBar/>
            
          </div>
          <div>
            <Button isPrimary className={cx('LearningPath_item_view-detail')} title="Xem chi tiết "/>

          </div>


        </div>
        <div className={cx('LearningPath_item-wrapper')}>
          <div className={cx('LearningPath_item-body')}>
            <div className={cx('LearningPath_item-infor')}>
              <h2 className={cx('LearningPath_item-title')}>
                <Link href="">Lộ trình học Font-end</Link>

              </h2>
              <p className={cx('LearningPath_item-desc')}>
              Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.

              </p>
            </div>
            <div className={cx('LearingPath_item_thumb-wrap')}>
              <Link className={cx('LearningPath_item_thumb-round')}>
                <img className={cx('LearningPath_item-thumb')} src="https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png" alt="" />
              </Link>
            </div>

          </div>
          <div className={cx('LearningPath_item-cta')}>
           <CircularProgressBar/>
            
          </div>
          <div>
            <Button isPrimary className={cx('LearningPath_item_view-detail')} title="Xem chi tiết "/>

          </div>


        </div>

      </div>
      <SuggestionBox/>

    </DefaultLayoutContainer>
  )
}

export default LearningPath