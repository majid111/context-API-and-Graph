import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CustomShapeBarCharts = () => {
  const data = [
    { name: 'A', value: 12 },
    { name: 'B', value: 19 },
    { name: 'C', value: 3 },
    { name: 'D', value: 5 },
    { name: 'E', value: 2 },
  ];

  // Custom bar shape
  const CustomBar = (props) => {
    const { x, y, width, height, fill } = props;
    return (
      <path d={`M${x},${y + 10} L${x + width},${y + 10} L${x + width / 2},${y} Z`} fill={fill} />
    );
  };

  return (
    <div>
      <h2>Custom Shape Bar Chart</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" shape={<CustomBar />} fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default CustomShapeBarCharts;