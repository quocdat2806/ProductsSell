import classNames from "classNames/bind";
import styles from "./CommonItem.module.scss";
import {Link} from 'react-router-dom'
import Button from "../Button";
const cx = classNames.bind(styles);


const CommonItem = ({className}) => {
  return (
    <div className={cx('CommonItem_wrapper',`${className}`)}>
        <Link className={cx('CommonItem_link')}>
            <Button title={"Xem khóa học"} className={cx('CommonItem_cta-btn__OK')}/>
            <img src="https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png" className={cx('CommonItem_thumb')} alt="" />

        </Link>
    </div>
  )
}

export default CommonItem