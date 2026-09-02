

import{ createBrowserRouter, createRoutesFromElements, Route, RouterProvider,BrowserRouter,Router } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects.jsx';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import { Analytics } from "@vercel/analytics/react"



const router  = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element = {<Layout/>}> 
    <Route path='' element = {<Home/>}/>
    <Route path='about' element = {<About/>}/>
    <Route path='projects' element = {<Projects/>}/>
    <Route path='projects/:slug' element = {<ProjectDetail/>}/>
    <Route path='contact' element = {<Contact/>}/>
    <Route path='connect' element = {<Contact/>}/>
    <Route path='*' element = {<NotFound/>}/>
    
    </Route>
    
   )
)

function App() {

  return (
    <>
      <RouterProvider router={router}/>
      <Analytics />
      
      
    </>
  )
}

export default App
