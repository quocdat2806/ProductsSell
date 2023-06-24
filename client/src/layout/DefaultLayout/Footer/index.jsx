import React from "react";
import classNames from "classNames/bind";
import styles from "./Footer.module.scss";
import IndexModule from "../../../components/IndexModule";
import { Link } from "react-router-dom";
import { FacebookIcon, TikTokIcon, YoutubeIcon } from "../../../Icons";
const cx = classNames.bind(styles);

const Footer = () => {
  const ModuleGrid = IndexModule["index-module-grid"];
  const ModuleWide = IndexModule["index-module-wide"];
  const ModuleRow = IndexModule["index-module-row"];
  const ModuleCol = IndexModule["index-module-col"];
  return (
    <div className={cx("Footer_wrapper")}>
      <ModuleGrid>
        <ModuleWide>
          <ModuleRow>
            <ModuleCol>
              <div className={cx("Footer_column")}>
                <div>
                  <div className={cx("Footer_column-top")}>
                    <a href="">
                      <img
                        className={cx("Footer_top-logo")}
                        src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                        alt=""
                      />
                    </a>
                    <h2 className={cx("Footer_top-slogan")}>
                      Học lập trình để đi làm
                    </h2>
                  </div>
                  <p className={cx("Footer_contact-list")}>
                    Điện thoại
                    <Link>0246.329.1102</Link>
                    <br />
                    Email:
                    <Link>contact@fullstack.edu.vn</Link>
                    <br />
                    Địa chỉ : Số 26 Dương Đình Nghệ, Phường Yên Hòa, Quận Cầu
                    Giấy, TP. Hà Nội
                  </p>
                  <div>
                    <Link>
                      <img
                        className={cx("Footer_dmca")}
                        src="https://fullstack.edu.vn/static/media/dmca.2593d9ecf1c982e3c3a2.png"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </ModuleCol>
            <ModuleCol isSmallCol>
            <div className={cx("Footer_column")}>
                <div>
                   
                    <h2 className={cx("Footer_heading")}>
                      VỀ F8
                    </h2>
                  <ul className={cx("Footer_list")}>
                    <li>
                      <Link>Giới thiệu</Link>

                    </li>
                    <li>
                      <Link>Liên hệ</Link>

                    </li>
                    <li>
                      <Link>Điều khoản</Link>

                    </li>
                    <li>
                      <Link>Bảo mật</Link>

                    </li>
                    <li>
                      <Link>Cơ hội việc làm</Link>

                    </li>
                  </ul>
                 
                </div>
              </div>

            </ModuleCol>
            <ModuleCol isSmallCol>
            <div className={cx("Footer_column")}>
                <div>
                   
                    <h2 className={cx("Footer_heading")}>
                      CÔNG CỤ
                    </h2>
                  <ul className={cx("Footer_list")}>
                    <li>
                      <Link>Tạo CV xin việc</Link>

                    </li>
                    <li>
                      <Link>Rút gọn liên kết</Link>

                    </li>
                    <li>
                      <Link>Clip-path marker</Link>

                    </li>
                    <li>
                      <Link>Snippet generator</Link>

                    </li>
                    <li>
                      <Link>Cảnh báo sờ tay lên mặt</Link>

                    </li>
                  </ul>
                 
                </div>
              </div>

            </ModuleCol>
            <ModuleCol isSmallCol>
            <div className={cx("Footer_column")}>
                <div>
                   
                    <h2 className={cx("Footer_heading")}>
                      SẢN PHẨM
                    </h2>
                  <ul className={cx("Footer_list")}>
                    <li>
                      <Link> Game Nester</Link>

                    </li>
                    <li>
                      <Link>Game CSS Diner</Link>

                    </li>
                    <li>
                      <Link>Game CSS Selector</Link>

                    </li>
                    <li>
                      <Link>Game Froggy</Link>

                    </li>
                    <li>
                      <Link>Game Froggy Pro</Link>

                    </li>
                    <li>
                      <Link>Game Scoops</Link>

                    </li>
                  </ul>
                 
                </div>
              </div>

            </ModuleCol>
            <ModuleCol>
              <div className={cx("Footer_column")}>
              <div>
                   
                   <h2 className={cx("Footer_heading")}>
                     CÔNG TY CỔ PHẦN CÔNG NGHỆ F8
                   </h2>
                 <ul className={cx("Footer_list")}>
                   <li>
                   Mã số thuế: 0109922901
                   </li>
                   <li>
                   Ngày thành lập: 04/03/2022

                   </li>
                   <li>
                   Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát triển những sản phẩm mang lại giá trị cho cộng đồng.

                   </li>
                   
                 </ul>
                
               </div>
              </div>
            </ModuleCol>
          </ModuleRow>
          <ModuleRow>
            <ModuleCol isFullWidth>
              <div className={cx('Footer_bottom')}>
              <p className={cx('Footer_copyright')}>© 2018 - 2023 F8. Nền tảng học lập trình hàng đầu Việt Nam</p>
              <div className={cx('Footer_social-list')}>
                <Link className={cx('Footer_social-item','Footer_youtube','social-item-first')}>
                  <YoutubeIcon className={cx('svg-inline--fa','fa-youtube-square')} />

                </Link>
                <Link className={cx('Footer_social-item','Footer_facebook')}>
                  <FacebookIcon className={cx('svg-inline--fa','fa-facebook-square')} />

                </Link>
                <Link className={cx('Footer_social-item','Footer_tiktok')}>
                  <TikTokIcon className={cx('svg-inline--fa','fa-tiktok')} />

                </Link>
              </div>
              </div>

            </ModuleCol>
          </ModuleRow>
        </ModuleWide>
      </ModuleGrid>
    </div>
  );
};

export default Footer;
