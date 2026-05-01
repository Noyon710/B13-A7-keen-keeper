import { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { TimelineContext } from "../context/TimelineContext";

export default function Stats() {
  const { timeline } = useContext(TimelineContext);

  const data = [
    { name: "Text", value: timeline.filter((item) => item.type === "Text").length || 1 },
    { name: "Call", value: timeline.filter((item) => item.type === "Call").length || 1 },
    { name: "Video", value: timeline.filter((item) => item.type === "Video").length || 1 }
  ];

  const colors = ["#7c3aed", "#1f513f", "#38a169"];

  return (
    <main className="stats-page">
      <h1>Friendship Analytics</h1>

      <section className="chart-card">
        <h3>By Interaction Type</h3>

        <div className="chart-box">
          <PieChart width={360} height={260}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={95}
              paddingAngle={8}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={colors[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </section>
    </main>
  );
}