import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Works from './pages/Works';
import Aboutme from './pages/Aboutme';


const App = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/works' element={<Works/>} />
                <Route path='/about-me' element={<Aboutme/>} />
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default App;