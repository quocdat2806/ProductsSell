import React from "react";
import classNames from "classNames/bind";
import styles from "./Sidebar.module.scss";
import CreateButton from "../../../components/CreateButton";
import { SidebarIcon } from "../../../fakeData";
import NewFeed from "../../../components/NewFeed";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <div className={cx("Sidebar")}>
      <div className={cx("Sidebar_wrapper")}>
        <CreateButton />
        <ul className={cx("Sidebar_list")}>
          {SidebarIcon.map((item, index) => {
            const Icon = item.icon;
            const isActive = item.isActive;
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={cx("Sidebar-itemBtn", {
                    "Sidebar-active": isActive,
                  })}
                  aria-current="page"
                  href={item.path}
                >
                  <Icon className={"svg-inline--fa"} />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <NewFeed/>

       
      </div>
    </div>
  );
};

export default Sidebar;
