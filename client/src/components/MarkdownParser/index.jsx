import React from "react";
import classNames from "classNames/bind";
import styles from "./MarkdownParser.module.scss";
const cx = classNames.bind(styles);
const MarkdownParser = ({ className,description }) => {
  return (
    <div className={cx("MarkdownParser_wrapper", `${className}`)}>
      <p>
        {description}
      </p>
    </div>
  );
};

export default MarkdownParser;
