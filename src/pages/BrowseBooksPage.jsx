import { useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function BrowseBooksPage() {
  const { category } = useParams();
  const books = useSelector(state => state.books);
  const categories = Array.from(new Set(books.map(b => b.category)));
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredBooks = books.filter(book => {
    const matchesCategory = category === 'all' || book.category.toLowerCase() === category;
    const matchesSearch = (
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-container">
      <h2>Browse Books</h2>
      
      <div className="controls">
        <label>
          Filter by Category:
          <select 
            className="category-select"
            value={category || 'all'} 
            onChange={e => navigate(`/books/${e.target.value}`)}
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat.toLowerCase()}>{cat}</option>
            ))}
          </select>
        </label>
        
        <input
          className="search-input"
          type="text"
          placeholder="Search by title or author..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      
      {filteredBooks.length === 0 ? (
        <div style={{textAlign: 'center', padding: '40px'}}>
          <h3>No books found</h3>
          <p>Try adjusting your search or category filter.</p>
        </div>
      ) : (
        <div className="book-grid">
          {filteredBooks.map(book => (
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
      )}
    </div>
  );
}
