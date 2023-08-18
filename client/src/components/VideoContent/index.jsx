import classNames from "classNames/bind";
import styles from "./VideoContent.module.scss";
const cx = classNames.bind(styles);
function VideoContent() {
  return (
    <div >
      <div>
        <header >
          <h1 >Sửa lỗi, xử lý submit form</h1>
          <p >Cập nhật tháng 2 năm 2022</p>
        </header>
        <button  data-tour="notes-tutorial">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="plus"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
            ></path>
          </svg>
          <span >
            Thêm ghi chú tại <span >00:00</span>
          </span>
        </button>
      </div>
      <div
        style="--font-size: 1.6rem; --line-height: 2;"
      >
        <p>
          Tham gia nhóm{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/groups/f8official/"
          >
            Học lập trình tại F8
          </a>{" "}
          trên Facebook để cùng nhau trao đổi trong quá trình học tập ❤️
        </p>{" "}
        <p>
          Các bạn subscribe kênh Youtube{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="/external-url?continue=https%3A%2F%2Furl.mycv.vn%2Ff8_youtube%3Fref%3Dlesson_desc"
          >
            F8 Official
          </a>{" "}
          để nhận thông báo khi có các bài học mới nhé ❤️
        </p>
      </div>
    </div>
  );
}

export default VideoContent;
