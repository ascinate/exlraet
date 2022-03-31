import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
      name: '0',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '1',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '2',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '3',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '4',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '5',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '6',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
        name: '7',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: '8',
        uv: 3570,
        pv: 4300,
        amt: 2100,
    },
    {
        name: '9',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
  ];


  function BookingCtMonth(){
    
    return(
        <>
       
        <BarChart
          width={700}
          height={350}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#6D88CF" />
          <Bar dataKey="uv" fill="#ECF1FE" />
        </BarChart>
        </>
    )
}
export default BookingCtMonth;