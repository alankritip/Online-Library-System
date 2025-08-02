
export default function NotFoundPage() {
  return (
    <div className="page-container not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn">← Back to Home</Link>
    </div>
  );
}