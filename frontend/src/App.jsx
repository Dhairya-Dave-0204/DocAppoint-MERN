import { Routes, Route } from 'react-router-dom';
import './App.css'
import { Navbar, Footer } from "./components/component_index"
import { About, Contact, FAQ, Home, Survey, DocGeneral, DocProfile1, DocCategory } from "./pages/page_index"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div className='min-h-screen font-Parkinsans'>
        <ToastContainer position='bottom-right'/>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doctor' element={<DocGeneral />} />
          <Route path='/doctor1' element={<DocProfile1 />} />
          <Route path='/doctorcat' element={<DocCategory />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/survey' element={<Survey />} />
        </Routes>
        <Footer /> 
      </div>
    </>
  )
}

export default App
