/* eslint-disable react/prop-types */
import classNames from "classNames/bind";
import styles from "./BlogLeftLayout.module.scss";
const cx = classNames.bind(styles);


const BlogLeftLayout = ({children}) => {
  return (
    <div className={cx('BlogLeftLayout')}>
        {children}
    </div>
  )
}

export default BlogLeftLayout