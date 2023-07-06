import React from "react";
import classNames from "classNames/bind";
import styles from "./Header.module.scss";
import Search from "../../../components/Search";
import FallbackAvatar from "../../../components/FallbackAvatar";
import { BackIcon, BellIcon } from "../../../Icons";
import { Logo, Avatar } from "../../../Images";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const Header = ({isBack}) => {
  return (
    <div className={cx('Header_wrapper')}>
      
      <div className={cx("Header_logo")}>
        <Link>
          <Logo />
        </Link>
        { isBack ?<Link className={cx('Header_backHome')}>
          <h4 className={cx('Header_logoHeading')}>
            <BackIcon/>
            <span>Quay lại</span>
          </h4>
        </Link> 
          : <h4 className={cx("Header_heading")}>Học Lập Trình Để Đi Làm</h4> }
       
      </div>
      <div className={cx("Header_search", "d-flex-center")}>
        <div>
          <Search />
        </div>
      </div>
      <div className={cx('Header_actions')}>
      
        <div className={cx("Header_action-portal")}></div>
        <a className={cx("Header_login-btn")} href="">
          Đăng nhập
        </a>
        <div>
          <button aria-expanded="false" className={cx("Header_myLearn")}>
            Khóa học của tôi
          </button>
        </div>
        <div>
          <div className={cx("Header_actionBtn")}>
            <BellIcon
              className={cx("Header_action-icon")}
            />
          </div>
        </div>
        <div aria-expanded="false" className={cx("Header_avatar-wrapper")}>
          <FallbackAvatar>
            <Avatar className={cx("Header_avatar")} />
          </FallbackAvatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
