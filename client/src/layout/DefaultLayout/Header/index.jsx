import React from 'react'
import classNames from "classNames/bind";
import styles from "./Header.module.scss";
import Search from '../../../components/Search';
import FallbackAvatar from '../../../components/FallbackAvatar';
import { BellIcon } from '../../../Icons';
import { Logo,Avatar } from '../../../Images';
const cx = classNames.bind(styles);
const Header = () => {
  return (
    <div className={cx("Header_wrapper")}>
      <div className={cx('Header_logo')}>
        <a  >
          <Logo/>
        </a>
        <h4 className={cx('Header_heading')}>Học Lập Trình Để Đi Làm</h4>
      </div>
      <div className={cx('Header_search','d-flex-center')}>
        <div>
           <Search/>
        </div>
      </div>
      <div className={cx('Header_actions')}>
        <div className={cx('login-portal')}></div>
        <a className={cx('Header_login-btn')} href="">Đăng nhập</a>
        <div>
          <button aria-expanded="false" className={cx('Header_myLearn')}>Khóa học của tôi</button>
        </div>
        <div>
          <div className={cx('Header_actionBtn')}>

            <BellIcon className={cx('Header_action-icon','svg-inline--fa','fa-bell')}/>
           
          </div>
        </div>
        <div aria-expanded = "false" className={cx('Header_avatar-wrapper')}>
          <FallbackAvatar>

              <Avatar className={cx('Header_avatar')}/>
          </FallbackAvatar>
        </div>
      </div>
    </div>

  )
}

export default Header