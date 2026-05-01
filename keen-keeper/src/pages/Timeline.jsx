import { useContext, useState } from "react";
import { TimelineContext } from "../context/TimelineContext";

export default function Timeline() {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? timeline : timeline.filter((item) => item.type === filter);

  const getIcon = (type) => {
    if (type === "Call") return "📞";
    if (type === "Text") return "💬";
    if (type === "Video") return "📹";
    return "🤝";
  };

  return (
    <main className="timeline-page">
      <h1>Timeline</h1>

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Call</option>
        <option>Text</option>
        <option>Video</option>
        <option>Meetup</option>
      </select>

      <div className="timeline-list">
        {filtered.map((item) => (
          <div className="timeline-item" key={item.id}>
            <span className="timeline-emoji">{getIcon(item.type)}</span>

            <div>
              <h3>
                {item.type} <span>with {item.name}</span>
              </h3>
              <p>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}