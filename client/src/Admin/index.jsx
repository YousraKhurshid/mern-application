import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap'; // Import the Container component
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Category from './pages/Category';
import Products from './pages/Products';
import Page404 from './pages/Page404';
import FooterSection from './Components/FooterSection';
import Spinner from 'react-bootstrap/Spinner';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';

export default function Admin() {
  const [user, setUser] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an API call delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="row m-0 p-0">
        <div className="col-md-3 m-0 p-0 bg-dark" style={{ height: '100vh' }}>
          <Sidebar />
        </div>
        {isLoading ? (
          <Container className="d-flex justify-content-center align-items-center vh-100">
            <Spinner animation="border" role="status">
              <span className="sr-only"></span>
            </Spinner>
          </Container>
        ) : (
          <div className="col-md-9">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />} />
              <Route path="/products" element={<Products />} />
              <Route path="*" element={<Page404 />} />
            </Routes>

            <FooterSection />
          </div>
        )}
      </div>
    </>
  );
}
