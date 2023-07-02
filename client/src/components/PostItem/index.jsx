/* eslint-disable react/prop-types */
import classNames from "classNames/bind";
import styles from "./PostItem.module.scss";
const cx = classNames.bind(styles);
import { Link } from "react-router-dom";
import FallbackAvatar from "../FallbackAvatar";
import Bookmark from "../Bookmark";
import { CheckIcon, EllipseIcon } from "../../Icons";

export const PostItemAuthor = ({
  className,
  isWrapper,
  isFallBackPro,
  isUser,
  isCheck,
  data
}) => {
  return (
    <div className={cx("PostItem_author")}>
      <Link
        className={cx({
          "PostItem_avatar-wrapper": isWrapper,
        })}
        href=""
      >
        <FallbackAvatar isFallBackPro={isFallBackPro}>
          <img
            src={data?.thums || data?.image}
            alt="Alan King"
          />
        </FallbackAvatar>
      </Link>
      <Link href="">
        <span
          className={cx({
            "PostItem_user-name": isUser,
          })}
        >
          {data?.author}
        </span>
        {isCheck && (
         <CheckIcon className={className}/>
        )}
        {isCheck && (
          <>
            <span className={cx("PostItem_dot")}>.</span>
            <span>{data?.duration} phút đọc</span>
          </>
        )}
      </Link>
    </div>
  );
};

const PostItem = ({ className }) => {
  return (
    <div className={cx("PostItem_wrapper")}>
      <div className={cx("PostItem_header")}>
        <PostItemAuthor className={className} />
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
            <h2 className={cx("PostItem_title")}>
              Cảm thấy khó khăn khi chuyển sang ngôn ngữ mới
            </h2>
          </Link>
          <p className={cx("PostItem_desc")}>
            Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm
            chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng...
          </p>
          <div className={cx("PostItem_infor")}>
            <Link className={cx("PostItem_tags")}>ReactJS</Link>
            <span>một tháng trước</span>
            <span className={cx("PostItem_dot")}>.</span>2 phút đọc
          </div>
        </div>
        {/* thumb */}
      </div>
    </div>
  );
};

export default PostItem;
