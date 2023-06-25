import classNames from "classNames/bind";
import styles from "./Banners.module.scss";
const cx = classNames.bind(styles);
import { Link } from "react-router-dom";

const Banners = () => {
  return (
    <div className={cx('Banners_wrapper Banner_sticky')}>
        <div className={cx('Banners_content')}>
            <Link className={cx('Banners_banner')}>
            <img src="https://files.fullstack.edu.vn/f8-prod/banners/26/63dc61f2a061e.png" alt="HTML CSS Pro Banner" title="HTML CSS Pro Banner"/>


            </Link>
            <Link className={cx('Banners_banner')}>
            <img src="https://files.fullstack.edu.vn/f8-prod/banners/32/6421144f7b504.png" alt="HTML CSS Pro Banner" title="HTML CSS Pro Banner"/>
            

            </Link>
        </div>    
    </div>
  )
}

export default Banners