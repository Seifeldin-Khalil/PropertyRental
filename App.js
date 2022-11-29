/*import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './store/AuthProvider';

import AddProductPage from './pages/AddProductPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import Layout from './UI/layout/Layout';
import ProdutPage from './pages/ProdutPage';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:productId" element={<ProdutPage />} />
            <Route path="/products/add" element={<AddProductPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;*/

const express = require('express');
const dotenv = require('dotenv');
const initiateDBConnection = require ('./config/db');

dotenv.config({
  path: './config/.env'
});

const PORT = process.env.PORT;

const app = express();

app.get('/',(req,res) => {
  res.send({
    data: 'Hello there!'
  });
});

app.listen(PORT, async() => {
  console.log(`Server started and listening to port ${PORT}`);
  await initiateDBConnection();
});