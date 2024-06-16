import React from 'react';
import 'remixicon/fonts/remixicon.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from '../Header/header.jsx';
import { HomePage } from '../HomePage/HomePage.jsx';
import { Footer } from '../Footer/footer.jsx';
import { ProductDescription } from '../ProductDescription/ProductDescription.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-description/:productName" element={<ProductDescription />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;













