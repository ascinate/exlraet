import React from "react";
import { BarChart, Bar, XAxis, LabelList, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      "name": "Jan",
      "uv": 1500,
      
    },
    {
      "name": "Feb",
      "uv": 2800,
    },
    {
      "name": "Mar",
      "uv": 4000,
    },
    {
      "name": "Apr",
      "uv": 5500,
    },
    {
      "name": "May",
      "uv": 6000,
    },
    {
      "name": "Jun",
      "uv": 4000,
    },
    {
      "name": "Jul",
      "uv": 2800,
    },
    {
        "name": "Aug",
        "uv": 1500,
      }
  ];

  
  function AdminNewDesignChart(){
      return(
         <>
         <BarChart width={730} height={370} data={data}>
            <XAxis dataKey="name" />
            <YAxis axisLine={false}  />
            <Tooltip cursor={{fill: 'transparent'}}/>
            
            
            <Bar dataKey="uv" barSize={50} radius={[30,30,0,0]} barCategoryGap={16} barGap={5} fill="#6D88CF" />
            </BarChart>
         </>
      );
  }
  export default AdminNewDesignChart;