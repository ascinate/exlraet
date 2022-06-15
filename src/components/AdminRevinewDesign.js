import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'New Technicians', value: 400 },
  { name: 'Best Performance', value: 300 },
  { name: 'Poor Performance', value: 300 }
];
const COLORS = ['#02B596', '#7A64C6', '#D57C09'];

export default class AdminRevinewDesign extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <PieChart width={350} height={350} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={165}
          cy={165}
          innerRadius={100}
          outerRadius={120}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }
}


