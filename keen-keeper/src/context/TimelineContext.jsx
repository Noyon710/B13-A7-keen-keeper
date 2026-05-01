import { createContext, useEffect, useState } from "react";

export const TimelineContext = createContext();

const starterTimeline = [
  { id: 1, type: "Meetup", name: "Tom Baker", title: "Meetup with Tom Baker", date: "March 29, 2026" },
  { id: 2, type: "Text", name: "Sarah Chen", title: "Text with Sarah Chen", date: "March 28, 2026" },
  { id: 3, type: "Meetup", name: "Olivia Martinez", title: "Meetup with Olivia Martinez", date: "March 26, 2026" },
  { id: 4, type: "Video", name: "Aisha Patel", title: "Video with Aisha Patel", date: "March 23, 2026" },
  { id: 5, type: "Call", name: "Marcus Johnson", title: "Call with Marcus Johnson", date: "March 19, 2026" },
  { id: 6, type: "Call", name: "Lisa Nakamura", title: "Call with Lisa Nakamura", date: "March 11, 2026" }
];

export default function TimelineProvider({ children }) {
  const [timeline, setTimeline] = useState(() => {
    const saved = localStorage.getItem("keenkeeper_timeline");
    return saved ? JSON.parse(saved) : starterTimeline;
  });

  useEffect(() => {
    localStorage.setItem("keenkeeper_timeline", JSON.stringify(timeline));
  }, [timeline]);

  const addTimeline = (type, name) => {
    const newItem = {
      id: Date.now(),
      type,
      name,
      title: `${type} with ${name}`,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      })
    };

    setTimeline((prev) => [newItem, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addTimeline }}>
      {children}
    </TimelineContext.Provider>
  );
}