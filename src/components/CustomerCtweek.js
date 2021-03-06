import React , { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Competed Customers', value: 400 },
  { name: 'Cancelled Customers', value: 400 },
  { name: 'Pending Customers', value: 200 }
];
const COLORS = ['#B5B5B6', '#7A64C6', '#D57C09'];

export default class CustomerCtweek extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

  render() {
    return (
      <PieChart width={350} height={450} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={80}
          cy={150}
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

