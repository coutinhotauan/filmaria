import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Filme from './pages/Filme';

const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/Filme/:id' element={<Filme/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;