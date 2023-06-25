import classNames from "classNames/bind";
import styles from "./SuggestionBox.module.scss";
const cx = classNames.bind(styles);

import { Link } from "react-router-dom";

const SuggestionBox = () => {
  return (
    <div className={cx('SuggestionBox_wrapper')}>
        <div className={cx('SuggestionBox_infor')}>
            <h2>Tham gia cộng đồng học viện F8 trên Facebook</h2>
            <p>Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.</p>
            <Link className={cx('SuggestionBox_cta')}>Tham gia nhóm</Link>
        </div>
        <div className={cx('SuggestionBox_image')}>
            <img src="https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png" alt="" />

        </div>

    </div>
  )
}

export default SuggestionBox