import classNames from "classNames/bind";
import styles from "./Navbar.module.scss";
import { BackIcon, HelpIcon, NoteIcon } from "../../../Icons";
import CircularProgressBar from "../../../components/CircularProgressBar";
const cx = classNames.bind(styles);

export function NavbarWrapper({children}){
    return(
        <div className={cx('Navbar_wrapper')} >
            {children}

        </div>
    )

}
export function NavbarPercent(){
  return(
    <div className={cx('Navbar_percent')}>
       <span className={cx('Navbar_num')}>98</span>%
    </div>
  )
}


export function NavbarActions({children}){
    return(
        <div className={cx('Navbar_actions')}>
            {children}
        </div>
    )
}

function Navbar() {
    return ( 
        <NavbarWrapper>
              <div title="Rời khỏi đây" className={cx("Navbar_back-btn")}>
              <BackIcon className={cx('svg-inline--fa fa-chevron','Navbar_icon')}/>
              </div>
              <a className={cx("Navbar_logo")} href="">
                <img
                  src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                  alt=""
                />
              </a>
              <div className={cx("Navbar_course-title")}>
                lap trinh js co ban
              </div>
              <NavbarActions>
                <div className={cx("Navbar_progress-bar")}>
                  <CircularProgressBar courseStep={()=>{}} isRightSide isCicularProgressBar >
                    <NavbarPercent/>
                     
                  </CircularProgressBar> 
                  <p className={cx("Navbar_complete-msg")}>
                    <strong>
                      <span className={cx("Navbar_num")}>202</span>
                       / 
                      <span className={cx("Navbar_num")}>206 </span>
                    </strong>
                     bài học
                  </p>
                </div>
                <button className={cx("Navbar_action-btn")}>
                 <NoteIcon className={cx('svg-inline--fa fa-file','Navbar_icon')}/>
                  <span className={cx("Navbar_label")}>Ghi chú</span>
                </button>
                <button className={cx("Navbar_action-btn", "Navbar_help-btn")}>
                 <HelpIcon className={cx('svg-inline--fa fa-circle-question','Navbar_icon')}/>
                  <span className={cx("Navbar_label")}>Hướng dẫn</span>
                </button>
              </NavbarActions>
           
      
            
      </NavbarWrapper>


     );
}

export default Navbar;