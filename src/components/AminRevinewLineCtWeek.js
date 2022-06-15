import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      uv: 4000,
      Rs: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      Rs: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      Rs: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      Rs: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      Rs: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      uv: 2390,
      Rs: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      uv: 3490,
      Rs: 4300,
      amt: 2100,
    },
    {
        name: 'Aug',
        uv: 3490,
        Rs: 4300,
        amt: 2100,
      },
  ];

  function AminRevinewLineCtWeek(){
      return(
         <>
         <BarChart
          width={600}
          height={350}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Rs" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
         </>
      );
  }
  export default AminRevinewLineCtWeek;