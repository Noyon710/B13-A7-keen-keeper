import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import friendsData from "../data/friends.json";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 600);
  }, []);

  if (loading) {
    return <div className="loader">Loading friends...</div>;
  }

  const displayFriends = [...friends, ...friends.slice(0, 4)];

  return (
    <main className="home">
      <section className="hero">
        <h1>Friends to keep close in your life</h1>
        <p>
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>
        <button>+ Add a Friend</button>
      </section>

      <section className="summary-grid">
        <div className="summary-card"><h2>10</h2><p>Total Friends</p></div>
        <div className="summary-card"><h2>3</h2><p>On Track</p></div>
        <div className="summary-card"><h2>6</h2><p>Need Attention</p></div>
        <div className="summary-card"><h2>12</h2><p>Interactions This Month</p></div>
      </section>

      <hr />

      <h2 className="section-title">Your Friends</h2>

      <section className="friends-grid">
        {displayFriends.map((friend, index) => (
          <Link to={`/friend/${friend.id}`} className="friend-card" key={index}>
            <img src={friend.picture} alt={friend.name} />
            <h3>{friend.name}</h3>
            <p>{friend.days_since_contact}d ago</p>

            <div className="tags">
              {friend.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <small className={`status ${friend.status.replace(" ", "-")}`}>
              {friend.status === "on-track"
                ? "On-Track"
                : friend.status === "almost due"
                ? "Almost Due"
                : "Overdue"}
            </small>
          </Link>
        ))}
      </section>
    </main>
  );
}