import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/">Back Home</Link>
    </main>
  );
}