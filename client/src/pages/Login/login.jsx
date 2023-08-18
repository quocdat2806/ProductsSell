import classNames from "classNames/bind";
import styles from "./Login.module.scss";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth,provider } from '../../firebase/config';
const cx = classNames.bind(styles);
export default function Login() {

  const handleLogin = async () =>{
    const provider = new GoogleAuthProvider;
    const res =  await signInWithPopup(auth,provider);
    console.log({res})
   }
   const loginFaceBook = async ()=>{
   const res =  await signInWithPopup(auth,provider);
   }
  return (
    <div className={cx('login-wrapper')}>
       <div className={cx('login-container')}>
        <div className={cx('login-content')}>
          <div className={cx('login-header')}>
            <a href="">
              <img className={cx('login-logo')} src="https://accounts.fullstack.edu.vn/assets/icon/f8_icon.png" alt="" />
            </a>
            <h1 className={cx('login-title')}>Đăng nhập vào F8</h1>
          </div>
          <div className={cx('login-body')}>
            <div className={cx('login-main-step')}>
              <div className={cx('singin-btn-wrapper')}>
                <img className={cx('singin-btn-icon')} src="	https://accounts.fullstack.edu.vn/assets/images/signin/personal-18px.svg" alt="" />
                <span className={cx('singin-title')}>Sử dụng email / số điện thoại</span>
              </div>
              <div onClick={handleLogin} className={cx('singin-btn-wrapper')}>
                <img className={cx('singin-btn-icon')} src="https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg" alt="" />
                <span className={cx('singin-title')}>Tiếp tục với google</span>
              </div>
              <div className={cx('singin-btn-wrapper')}>
                <img className={cx('singin-btn-icon')} src="https://accounts.fullstack.edu.vn/assets/images/signin/facebook-18px.svg" alt="" />
                <span onClick={loginFaceBook} className={cx('singin-title')}>Tiếp tục với Facebook</span>
              </div>
              <div className={cx('singin-btn-wrapper')}>
                <img className={cx('singin-btn-icon')} src="	https://accounts.fullstack.edu.vn/assets/images/signin/github-18px.svg" alt="" />
                <span className={cx('singin-title')}>Tiếp tục với Github</span>
              </div>

            </div>
            <p className={cx('login-dont-hvac')}>
              Bạn chưa có tài khoản?
              <a href="/register">Đăng ký</a>
            </p>
          </div>
          <div className={cx('login-accept')}>
            Việc bạn tiếp tục sử dụng trang web này đồng nghĩa với <a href="">Điều khoản sử dụng  </a>
             của chúng tôi
           
          </div>


        </div>
        <div className={cx('login-about')}>
            <a href="https://fullstack.edu.vn/about-us" target="_blank" rel="noopener noreferrer">Giới thiệu về F8</a>
            <span>|</span>
            <a href="https://www.youtube.com/c/F8VNOfficial" target="_blank" rel="noopener noreferrer">F8 trên Youtube</a>
            <span>|</span>
            <a href="https://www.facebook.com/groups/f8official" target="_blank" rel="noopener noreferrer">F8 trên Facebook</a>

        </div>




       </div>
       <div id='send-verifycode-button'></div>

    </div>
   
  )
}
