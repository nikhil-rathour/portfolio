

import{ createBrowserRouter, createRoutesFromElements, Route, RouterProvider,BrowserRouter,Router } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import About from './components/About';
import Connect from './components/Connect';
import Projects from './components/Projects.jsx';




const router  = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element = {<Layout/>}> 
    <Route path='' element = {<Home/>}/>
    <Route path='about' element = {<About/>}/>
    <Route path='connect' element = {<Connect/>}/>
    <Route path='projects' element = {<Projects/>}/>
    
    </Route>
    
   )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
      
      
    </>
  )
}

export default App
