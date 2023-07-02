/* eslint-disable react/prop-types */
import classNames from "classNames/bind";
import styles from "./ScrollList.module.scss";
const cx = classNames.bind(styles);
import IndexModule from "../IndexModule";
import CommonItem from "../CommonItem";
import useFetch from "../../hooks/useFetch";
const ScrollList = ({ className,hide }) => {
  
  const dataHome = useFetch(hide)
  const ModuleRow = IndexModule["index-module-row"];
  const ModuleCol = IndexModule["index-module-col"];

  function ScrollHeading({isPro,isStrong,title}){
    return(
      <div>
        { isStrong &&
        <p className={cx('ScrollList_sub-heading')}>
          <strong>327.352+ </strong>
          người khác đã học

        </p>
  }
      <div className={cx("ScrollList_heading-wrap")}>
        <h2 className={cx("ScrollList_heading")}>
          <span>
            {title}
          { isPro && <span className={cx("ScrollList_label")}>Mới</span>}
          </span>
        </h2>
      </div>
    </div>
    )
  }
  return (
    <>
      {dataHome?.map((data, index) => {
        
        return (
          <div
            key={index}
            className={cx("ScrollList_vertical")}
          >
            <ScrollHeading
             isPro={data?.isPro}
             isStrong={data?.isStrong}
             title={data?.title}
            />
          
            <div className={cx("ScrollList_body")}>
              {
                <ModuleRow>
                  {data.data.map((item) => {
                    return (
                      <ModuleCol key={index}>
                        <CommonItem 
                           isPrice={data?.isPrice}
                           isStudentCount={data?.isStudentCount} 
                           isPost={data?.isPost} 
                           isVideo={data?.isVideo} 
                           isPro={data?.isPro}
                           data={item}
                           hide={hide}
                           className={className} 
                        />
                      </ModuleCol>
                    );
                  })}
                </ModuleRow>
              }
            </div>
          </div>
        );
      })}
      
    </>
  );
};

export default ScrollList;
