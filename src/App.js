import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import Cart from './pages/cart/Cart';
import Statistics from './pages/statistics/Statistics';
import ProductDetail from './pages/product/ProductDetail';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/statistics' element={<Statistics />} />
                <Route path='/detail' element={<ProductDetail />} />
            </Routes>
        </BrowserRouter>
    );
};