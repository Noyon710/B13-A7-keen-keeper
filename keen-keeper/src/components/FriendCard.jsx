import { useNavigate } from "react-router-dom";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  return (
    <div className="friend-card" onClick={() => navigate(`/friend/${friend.id}`)}>
      <img src={friend.picture} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p>{friend.days_since_contact}d ago</p>

      <div className="tag-box">
        {friend.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>

      <span className={`status ${friend.status.replace(" ", "-")}`}>
        {friend.status}
      </span>
    </div>
  );
}