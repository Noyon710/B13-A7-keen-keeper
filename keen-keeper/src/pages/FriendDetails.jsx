import { useContext } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import friends from "../data/friends.json";
import { TimelineContext } from "../context/TimelineContext";

export default function FriendDetails() {
  const { id } = useParams();
  const friend = friends.find((item) => item.id === Number(id));
  const { addTimeline } = useContext(TimelineContext);

  if (!friend) {
    return (
      <main className="details-page">
        <h1>Friend not found</h1>
      </main>
    );
  }

  const handleAction = (type) => {
    addTimeline(type, friend.name);
    toast.success(`${type} with ${friend.name} added to timeline`);
  };

  return (
    <main className="details-page">
      <section className="details-left">
        <div className="profile-card">
          <img src={friend.picture} alt={friend.name} />
          <h2>{friend.name}</h2>

          <small className={`status ${friend.status.replace(" ", "-")}`}>
            {friend.status === "on-track"
              ? "On-Track"
              : friend.status === "almost due"
              ? "Almost Due"
              : "Overdue"}
          </small>

          <div className="tags">
            {friend.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <p className="bio">"{friend.bio}"</p>
          <p className="preferred">Preferred: email</p>
          <p className="preferred">{friend.email}</p>
        </div>

        <button className="side-btn">♙ Snooze 2 Weeks</button>
        <button className="side-btn">▣ Archive</button>
        <button className="side-btn delete">♲ Delete</button>
      </section>

      <section className="details-right">
        <div className="detail-stats">
          <div className="detail-stat-card">
            <h2>{friend.days_since_contact}</h2>
            <p>Days Since Contact</p>
          </div>

          <div className="detail-stat-card">
            <h2>{friend.goal}</h2>
            <p>Goal (Days)</p>
          </div>

          <div className="detail-stat-card">
            <h2>{friend.next_due_date}</h2>
            <p>Next Due</p>
          </div>
        </div>

        <div className="goal-card">
          <div>
            <h3>Relationship Goal</h3>
            <p>Connect every <strong>{friend.goal} days</strong></p>
          </div>
          <button>Edit</button>
        </div>

        <div className="check-card">
          <h3>Quick Check-In</h3>

          <div className="check-actions">
            <button onClick={() => handleAction("Call")}>
              <span>📞</span>
              Call
            </button>

            <button onClick={() => handleAction("Text")}>
              <span>▣</span>
              Text
            </button>

            <button onClick={() => handleAction("Video")}>
              <span>▰</span>
              Video
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}