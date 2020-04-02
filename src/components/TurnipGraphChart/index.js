import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import "./styles.scss";

export const TurnipGraphChart = () => {
  const data = [
    { name: "Page A", price: 99, buy: 82 },
    { name: "Page A", price: 87, buy: 82 },
    { name: "Page A", price: 85, buy: 82 },
    { name: "Page A", price: 73, buy: 82 },
    { name: "Page A", price: 70, buy: 82 },
    { name: "Page A", price: 94, buy: 82 },
    { name: "Page A", price: 99, buy: 82 },
    { name: "Page A", price: 87, buy: 82 },
    { name: "Page A", price: 85, buy: 82 },
    { name: "Page A", price: 73, buy: 82 },
    { name: "Page A", price: 70, buy: 82 },
    { name: "Page A", price: 94, buy: 82 }
  ];

  return (
    <ResponsiveContainer minWidth={640} minHeight={480}>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line
          type="linear"
          dataKey="price"
          stroke="#ff4757"
          strokeWidth={1}
        />
        <Line type="stepAfter" dataKey="buy" stroke="#2ed573" strokeWidth={1} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis
          domain={[
            dataMin => Math.round(dataMin * 0.9),
            dataMax => Math.round(dataMax * 1.1)
          ]}
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
