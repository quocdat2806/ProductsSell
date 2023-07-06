import classNames from "classNames/bind";
import styles from "./App.module.scss";
import Sidebar from "../../layout/DefaultLayout/Sidebar";
const cx = classNames.bind(styles);

export function AppWithSidebar({children}){
    return(
    <div className={cx('App_withSidebar')}>
        {children}
    </div>
    )

}
export function AppSidebarWrap({children}){
    return(
    <div className={cx('App_sidebarWrap')}>
        {children}
    </div>
    )
}
export function AppWithSidebarContent({children}){
    return(
        <div className={cx('App_withSidebarContent')}>
            {children}
        </div>

    )
}
function App({children}) {
    return ( 
        <AppWithSidebar>
            <AppSidebarWrap>
                <Sidebar/>


            </AppSidebarWrap>
            <AppWithSidebarContent>
                {children}

            </AppWithSidebarContent>

        </AppWithSidebar>

     );
}

export default App;