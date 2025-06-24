import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Navbar = styled.nav`
  background-color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartIcon = styled.div`
  color: white;
  cursor: pointer;
`;

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item._id !== productId));
  };

  return (
    <Router>
      <Navbar>
        <h2>E-Commerce Store</h2>
        <CartIcon>
          <Link to="/cart">Cart ({cart.length})</Link>
        </CartIcon>
      </Navbar>
      
      <Container>
        <Routes>
          <Route path="/" element={
            <ProductGrid>
              {products.map(product => (
                <ProductCard key={product._id}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                </ProductCard>
              ))}
            </ProductGrid>
          } />
          
          <Route path="/cart" element={
            <div>
              <h2>Shopping Cart</h2>
              {cart.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <div>
                  {cart.map(item => (
                    <div key={item._id}>
                      <h3>{item.name}</h3>
                      <p>${item.price}</p>
                      <button onClick={() => removeFromCart(item._id)}>Remove</button>
                    </div>
                  ))}
                  <h3>Total: ${cart.reduce((sum, item) => sum + item.price, 0)}</h3>
                </div>
              )}
            </div>
          } />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
