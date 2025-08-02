import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

export default function AddBookPage() {
  const [form, setForm] = useState({
    title: "", author: "", description: "", category: "", rating: ""
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = Array.from(new Set(useSelector(state => state.books.map(b => b.category))));

  function validate(fields) {
    let errs = {};
    if (!fields.title) errs.title = "Title is required";
    if (!fields.author) errs.author = "Author is required";
    if (!fields.description) errs.description = "Description is required";
    if (!fields.category) errs.category = "Category is required";
    if (!fields.rating || +fields.rating < 0 || +fields.rating > 5) errs.rating = "Rating must be between 0-5";
    return errs;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    dispatch(addBook({...form, rating: Number(form.rating), popular: false}));
    navigate('/books/all');
  }

  return (
    <div className="page-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input 
            name="title" 
            value={form.title} 
            onChange={handleChange}
            placeholder="Enter book title..." 
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </label>

        <label>
          Author:
          <input 
            name="author" 
            value={form.author} 
            onChange={handleChange}
            placeholder="Enter author name..." 
          />
          {errors.author && <span className="error-message">{errors.author}</span>}
        </label>

        <label>
          Description:
          <textarea 
            name="description" 
            value={form.description} 
            onChange={handleChange}
            placeholder="Enter book description..." 
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </label>

        <label>
          Category:
          <select name="category" value={form.category} onChange={handleChange}>
            <option value="">Select a category...</option>
            {categories.map(cat =>
              <option key={cat} value={cat}>{cat}</option>
            )}
            <option value="Other">Other</option>
          </select>
          {errors.category && <span className="error-message">{errors.category}</span>}
        </label>

        <label>
          Rating (0-5):
          <input 
            name="rating" 
            type="number" 
            value={form.rating} 
            onChange={handleChange} 
            min={0} 
            max={5} 
            step={0.1}
            placeholder="0.0" 
          />
          {errors.rating && <span className="error-message">{errors.rating}</span>}
        </label>

        <div style={{display: 'flex', gap: '15px', justifyContent: 'center'}}>
          <button type="submit">Add Book</button>
          <button type="button" onClick={() => navigate('/books/all')}>Cancel</button>
        </div>
      </form>
    </div>
  );
}