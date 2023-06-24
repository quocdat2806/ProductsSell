import { publicRouters } from "./routes"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { DefaultLayout } from "./layout";

function App() {

  return (
    <>
      <BrowserRouter>
         <Routes>
            {publicRouters.map((route,index)=>{
              let Layout = DefaultLayout
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}  />
            })}
         </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
