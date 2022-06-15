import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Inactive customers', value: 400 },
  { name: 'Unique Customers', value: 300 },
  { name: 'Repeat Customers', value: 300 }
];
const COLORS = ['#B5B5B6', '#7A64C6', '#D57C09'];

export default class CustomerCtMonth extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <PieChart width={350} height={450} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          innerRadius={50}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend/>
      </PieChart>
    );
  }
}


