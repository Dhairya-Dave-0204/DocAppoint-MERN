import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Navbar, Footer } from "./components/component_index"
import { Home } from "./pages/page_index"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div className='min-h-screen'>
        <ToastContainer position='bottom-right'/>
        <Navbar />
        {/* <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer /> */}
      </div>
    </>
  )
}

export default App
