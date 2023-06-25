import classNames from "classNames/bind";
import styles from "./PostItem.module.scss";
const cx = classNames.bind(styles);
import { Link } from "react-router-dom";
import FallbackAvatar from "../FallbackAvatar";
import Bookmark from "../Bookmark";
import { EllipseIcon } from "../../Icons";

const PostItem = () => {
  return (
    <div className={cx("PostItem_wrapper")}>
      <div className={cx("PostItem_header")}>
        <div className={cx("PostItem_author")}>
          <Link href="">
            <FallbackAvatar>
            <img src="https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg" alt="Alan King"/>
            </FallbackAvatar>
          </Link>
          <Link href="">
            <span>Alan King</span>
          </Link>
        </div>
        <div className={cx("PostItem_actions")}>
          <Bookmark className={cx("PostItem_optionBtn")} />
          <div className={cx("PostItem_optionBtn")}>
            <EllipseIcon className="svg-inline--fa fa-ellipsis" />
          </div>
        </div>
      </div>
      <div className={cx("PostItem_body")}>
        <div className={cx("PostItem_infor")}>
            <Link href="">
                <h2 className={cx('PostItem_title')}>Cảm thấy khó khăn khi chuyển sang ngôn ngữ mới</h2>
            </Link>
            <p className={cx('PostItem_desc')}>
            Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng...

            </p>
            <div className={cx('PostItem_infor')}>
              <Link className={cx('PostItem_tags')}>
                ReactJS

              </Link>
              <span>một tháng trước</span>
              <span className={cx('PostItem_dot')}>.</span>
              2 phút đọc


            </div>

        </div>
        {/* thumb */}
      </div>
    </div>
  );
};

export default PostItem;
