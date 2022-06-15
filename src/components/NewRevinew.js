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
      "uv": 4500,
    },
    {
      "name": "May",
      "uv": 5500,
    },
    {
      "name": "Jun",
      "uv": 6000,
    },
    {
      "name": "Jul",
      "uv": 5500,
    },
    {
        "name": "Aug",
        "uv": 4500,
      },
    
      {
        "name": "Sep",
        "uv": 4000,
      },
      {
        "name": "Oct",
        "uv": 3000,
      },

      {
        "name": "Nov",
        "uv": 2800,
      },
      {
        "name": "Dec",
        "uv": 1500,
      }
  ];

  
  function NewRevinew(){
      return(
         <>
         <BarChart width={1000} height={370} data={data}>
            <XAxis dataKey="name"  axisLine={false}/>
            <YAxis axisLine={false} />
            <Tooltip cursor={{fill: 'transparent'}}/>
            
            
            <Bar dataKey="uv" barSize={50} radius={[30,30,0,0]} barCategoryGap={16} barGap={5} fill="#6D88CF" />
            </BarChart>
         </>
      );
  }
  export default NewRevinew;