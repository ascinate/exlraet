import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '1',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '2',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '3',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '4',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '5',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '6',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '7',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
        name: '8',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: '9',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
  ];

  function RevieCtWeek(){
      return(
          <>
          <AreaChart
          width={500}
          height={250}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
           >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#6D88CF" fill="#6D88CF" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#6D88CF" fill="#6D88CF" />
            <Area type="monotone" dataKey="amt" stackId="1" stroke="#ECF1FE" fill="#ECF1FE" />
            </AreaChart>
          </>
      );
  }
  export default RevieCtWeek;