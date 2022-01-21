import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';
import NotFound from './pages/NotFound';

const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/Filme/:id' element={<Filme/>}/>
                <Route exact path='/favoritos' element={<Favoritos/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;