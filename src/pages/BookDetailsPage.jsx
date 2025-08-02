import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

export default function BookDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector(state => state.books.find(b => b.id === id));

  if (!book) {
    return (
      <div className="page-container not-found">
        <h2>Book not found</h2>
        <p>The book you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/books/all')}>Browse All Books</button>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="book-details">
        <h2>{book.title}</h2>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Category:</strong> <span className="book-category">{book.category}</span></p>
        <p><strong>Rating:</strong> <span className="book-rating">{book.rating}</span></p>
        <div style={{marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center'}}>
          <button onClick={() => navigate(-1)}>← Back</button>
          <button onClick={() => navigate('/books/all')}>Browse All Books</button>
        </div>
      </div>
    </div>
  );
}