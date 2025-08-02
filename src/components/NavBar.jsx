import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav style={{ marginBottom: 20 }}>
      <Link to="/" style={{ marginRight: 10 }}>Home</Link>
      <Link to="/books/all" style={{ marginRight: 10 }}>Browse Books</Link>
      <Link to="/add-book">Add Book</Link>
    </nav>
  );
}
