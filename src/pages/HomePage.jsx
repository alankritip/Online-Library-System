import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useNavigate } from 'react-router-dom';

export default function HomePage() {
  const books = useSelector(state => state.books);
  const categories = Array.from(new Set(books.map(b => b.category)));
  const popularBooks = books.filter(b => b.popular);
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>Welcome to the Online Library!</h1>
      
      <div>
        <h2>Book Categories</h2>
        <div className="category-list">
          {categories.map(cat => (
            <div key={cat} className="category-item" tabIndex={0} role='button' style={{ cursor: 'pointer' }} onClick={() => navigate(`/books/${cat.toLowerCase()}`)}
            onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                navigate(`/books/${cat.toLowerCase()}`);
            }
        }}>
            {cat}
            </div>
        ))}
        </div>
      </div>
      
      <div className="popular-books">
        <h2>Popular Books</h2>
        <div className="book-grid">
          {popularBooks.map(book => (
            <li key={book.id}>
              <div className="book-title">{book.title}</div>
              <div className="book-author">by {book.author}</div>
              <div className="book-description">{book.description}</div>
              <div className="book-meta">
                <span className="book-category">{book.category}</span>
                <span className="book-rating">{book.rating}</span>
              </div>
              <div style={{marginTop: '15px'}}>
                <Link to={`/book/${book.id}`} className="btn">View Details</Link>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
