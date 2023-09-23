


// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import "bootstrap-icons/font/bootstrap-icons.css";
// import { Home, Product, Products, AboutPage, ContactPage, Cart, Login, Register, Checkout, PageNotFound } from "./pages"
import Home from './pages/Home';
import ProductsMain from './pages/ProductsMain';
import ProductDetails from './pages/ProductDetails';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import PageNotFound from './pages/PageNotFound';
import RoutingConfig from './Routing/RoutingConfig';
import Menu from './Routing/Menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Provider store={store}>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductsMain />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>

);