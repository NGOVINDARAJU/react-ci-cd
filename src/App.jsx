import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';


export default function App() {
return (
<div className="app">
<Header />
<nav style={{ padding: '10px' }}>
<Link to="/">Home</Link> | <Link to="/about">About</Link>
</nav>
<main style={{ padding: '20px' }}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
</Routes>
</main>
<Footer />
</div>
);
}