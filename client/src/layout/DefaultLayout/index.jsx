import Header from './Header'
import Footer from './Footer'
import IndexModule from '../../components/IndexModule';
import App from "../../components/App";



const DefaultLayout = ({children,isBack}) => {
  const ModuleGrid = IndexModule['index-module-grid']
  return (
    <>
    <Header isBack={isBack} />
    <App>
      <ModuleGrid>
        {children}
      </ModuleGrid>
    </App>
  
    <Footer/>

    <div className='Toastify'></div>
    </>
  )
}

export default DefaultLayout