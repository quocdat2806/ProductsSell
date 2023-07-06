/* eslint-disable react/prop-types */
import classNames from "classNames/bind";
import styles from "./CommonItem.module.scss";
import { Link } from "react-router-dom";
import Button from "../Button";
import CourseItem from "../CourseItem";
import { PostItemAuthor } from "../PostItem";
import VideoItem, { VideoItemInfo } from "../VideoItem";
const cx = classNames.bind(styles);
const CourseItemProIcon = CourseItem["CourseItem_pro-icon"];
const CourseItemMainPrice = CourseItem["CourseItem_main-price"];
const CourseItemOldPrice = CourseItem["CourseItem_old-price"];
const CourseItemStudentsCount = CourseItem["CourseItem_students-count"];

// eslint-disable-next-line no-unused-vars
const CommonItem = ({
  className,
  data,
  isPro,
  isPrice,
  isStudentCount,
  isPost,
  isVideo,
}) => {
  
  return (
    <div className={cx("CommonItem_wrapper",{
      [className]: Boolean(className)
    } )}>
      <Link to={`/courses/${data.slug}`} className={cx("CommonItem_link")}>
        <Button
          title={"Xem khóa học"}
          className={cx("CommonItem_cta-btn__OK")}
        />
        <img
          src={data?.thums || data?.image}
          className={cx("CommonItem_thumb")}
          alt=""
        />
        {isVideo && <VideoItemInfo duration={data?.durations} /> }
      </Link>
      <h3 className={cx("CommonItem_title")}>
        <Link>{data?.name}</Link>
      </h3>
      {isPro && <CourseItemProIcon />}
      {isPrice  && (
        <div className="price">
          <CourseItemOldPrice oldPrice={data?.oldPrice} />
          <CourseItemMainPrice mainPrice={data?.mainPrice} />
        </div>
      )}
      {isStudentCount && (
        <CourseItemStudentsCount
          studentsCount={data?.studentsCount}
        
        />
      )}
      {isPost  && (
        <PostItemAuthor
          className={"userName_icon"}
          isWrapper
          isFallBackPro
          isUser
          isCheck
          data={data}
        />
      )}
      {isVideo && <VideoItem data={data} />}
    </div>
  );
};

export default CommonItem;
