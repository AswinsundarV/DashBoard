import { LineChart, Line, XAxis, YAxis,Tooltip, Legend } from 'recharts';

const salesdata = [
  {
    "name": "jan",
   "Receivables": 15000,
    "Payables": 4000,
    "amt": 0
  },
  {
    "name": "feb",
    "Receivables": 16000,
    "Payables": 10000,
    "amt": 2210
  },  {
    "name": "mar",
    "Receivables": 21000,
    "Payables": 18000,
  
  },
  {
    "name": "Apr",
  "Receivables": 20000,
    "Payables": 14000,
    "amt": 2000
  },
  {
    "name": "May",
    "Receivables": 10000,
    "Payables": 6000,
    "amt": 2181
  },
  {
    "name": "June",
    "Receivables": 2000,
    "Payables": 3800,
    "amt": 2500
  },
  {
    "name": "Jul",
    "Receivables": 7000,
    "Payables": 12000,
    "amt": 2100
  },
  {
 
    "name": "Aug",
    "Receivables": 15000,
    "Payables": 30000,
    "amt": 2400
  },
  {
    "name": "Sep",
    "Receivables": 21000,
    "Payables": 7000,
    "amt": 2210
  },
  {
    "name": "Oct",
    "Receivables": 28000,
    "Payables": 6000,
    "amt": 2290
  },
  {
    "name": "Nov",
    "Receivables": 28000,
    "Payables": 15000,
    "amt": 2000
  },
  {
    "name": "Dec",
    "Receivables": 27000,
    "Payables": 23500,
    "amt": 2181
  }
]

export default function TotalReceivable() {
  return (

        <div>
      <LineChart width={800} height={200} data={salesdata}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
 
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
   <Legend verticalAlign="top" height={36}/>
  <Line  dataKey="Receivables" stroke="#8884d8" />
  <Line  dataKey="Payables" stroke="#82ca9d" />
</LineChart>
    </div> 
  
  )
}
