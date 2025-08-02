import NavBar from './components/NavBar.jsx';
import HomePage from './pages/HomePage.jsx';
import BrowseBooksPage from './pages/BrowseBooksPage.jsx';
import BookDetailsPage from './pages/BookDetailsPage.jsx';
import AddBookPage from './pages/AddBookPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import './App.css'; // Import your CSS file

import { Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books/:category" element={<BrowseBooksPage />} />
        <Route path="/book/:id" element={<BookDetailsPage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="/books" element={<Navigate to="/books/all" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}