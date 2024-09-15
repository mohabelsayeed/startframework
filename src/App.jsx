import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';


let routo = createBrowserRouter([
  {path: '', element: <Layout/> , children :([
    { index: true , element: <Home/> },
    { path: 'About', element: <About/> },
    { path: 'portfolio', element: <Portfolio/> },
    { path: 'contact', element: <Contact/> },
  ]) } 
])

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
     <RouterProvider router={routo} ></RouterProvider>
       
    </>
  )
}

export default App
