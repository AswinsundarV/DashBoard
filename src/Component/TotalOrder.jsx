import { BarChart, Bar,  XAxis, YAxis, Legend } from 'recharts';

const data = [
  {
    "name": "jan",
   "incoming": 15000,
    "fulfillment": 4000,
    "amt": 0
  },
  {
    "name": "feb",
    "incoming": 16000,
    "fulfillment": 10000,
    "amt": 2210
  },  {
    "name": "mar",
    "incoming": 21000,
    "fulfillment": 18000,
  
  },
  {
    "name": "Apr",
  "incoming": 20000,
    "fulfillment": 14000,
    "amt": 2000
  },
  {
    "name": "May",
    "incoming": 10000,
    "fulfillment": 6000,
    "amt": 2181
  },
  {
    "name": "June",
    "incoming": 2000,
    "fulfillment": 3800,
    "amt": 2500
  },
  {
    "name": "Jul",
    "incoming": 7000,
    "fulfillment": 12000,
    "amt": 2100
  },
  {
 
    "name": "Aug",
    "incoming": 15000,
    "fulfillment": 30000,
    "amt": 2400
  },
  {
    "name": "Sep",
    "incoming": 21000,
    "fulfillment": 7000,
    "amt": 2210
  },
  {
    "name": "Oct",
    "incoming": 28000,
    "fulfillment": 6000,
    "amt": 2290
  },
  {
    "name": "Nov",
    "incoming": 28000,
    "fulfillment": 15000,
    "amt": 2000
  },
  {
    "name": "Dec",
    "incoming": 27000,
    "fulfillment": 23500,
    "amt": 2181
  }
];

export default function TotalOrder() {
  return (
    <div>
       <BarChart
          width={900}
          height={200}
          data={data}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="fulfillment" fill="#8884d8"  />
          <Bar dataKey="incoming" fill="#82ca9d" />
        </BarChart>
    </div>
  )
}
