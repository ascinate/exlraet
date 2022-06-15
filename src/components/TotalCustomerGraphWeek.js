import React from "react";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    Unique: 4000,
    Repeat: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    Unique: 3000,
    Repeat: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    Unique: 2000,
    Repeat: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    Unique: 2780,
    Repeat: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    Unique: 1890,
    Repeat: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    Unique: 2390,
    Repeat: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    Unique: 3490,
    Repeat: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    Unique: 3490,
    Repeat: 4300,
    amt: 2100,
  },
  {
    name: 'JSep',
    Unique: 4090,
    Repeat: 4300,
    amt: 2100,
  },
  {
    name: 'Oct',
    Unique: 3490,
    Repeat: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    Unique: 3490,
    Repeat: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    Unique: 3490,
    Repeat: 4300,
    amt: 2100,
  },
];

function TotalCustomerGraphWeek(){
   return(
       <>
        <AreaChart
        width={540}
        height={240}
        data={data}
        
        >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Unique" stackId="1" stroke="#E55C9B" fill="#8478FF" fillOpacity={0.3} />
        <Area type="monotone" dataKey="Repeat" stackId="1" stroke="#8478FF" fill="#8478FF" fillOpacity={0.3} />
        </AreaChart>
       </>
   );
}
export default TotalCustomerGraphWeek;