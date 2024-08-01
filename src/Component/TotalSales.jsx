import { LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';

const salesdata = [
  {
    "name": "jan",
   "Purchase": 15000,
    "sales": 4000,
    "amt": 0
  },
  {
    "name": "feb",
    "Purchase": 16000,
    "sales": 10000,
    "amt": 2210
  },
  {
    "name": "mar",
    "Purchase": 21000,
    "sales": 18000,
    "amt": 2290
  },
  {
    "name": "Apr",
  "Purchase": 20000,
    "sales": 14000,
    "amt": 2000
  },
  {
    "name": "May",
    "Purchase": 10000,
    "sales": 6000,
    "amt": 2181
  },
  {
    "name": "June",
    "Purchase": 2000,
    "sales": 3800,
    "amt": 2500
  },
  {
    "name": "Jul",
    "Purchase": 7000,
    "sales": 12000,
    "amt": 2100
  },
  {
 
    "name": "Aug",
    "Purchase": 15000,
    "sales": 30000,
    "amt": 2400
  },
  {
    "name": "Sep",
    "Purchase": 21000,
    "sales": 7000,
    "amt": 2210
  },
  {
    "name": "Oct",
    "Purchase": 28000,
    "sales": 6000,
    "amt": 2290
  },
  {
    "name": "Nov",
    "Purchase": 28000,
    "sales": 15000,
    "amt": 2000
  },
  {
    "name": "Dec",
    "Purchase": 27000,
    "sales": 23500,
    "amt": 2181
  }
]

export default function TotalSales() {
  return (
    <div>
      <LineChart width={950} height={200} data={salesdata}>
 
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
   <Legend verticalAlign="top" height={36}/>
  <Line  dataKey="sales" stroke="#8884d8" />
  <Line  dataKey="Purchase" stroke="#82ca9d" />
</LineChart>
    </div> 
  )
}


