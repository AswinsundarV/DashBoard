import { BarChart, Bar, XAxis, YAxis, Legend } from 'recharts';

const data = [
  {
    name: 'Apple',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'intel',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Lava',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'hp',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Nokia',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
 
];

export default function DueAmount() {
  return (
    <div>
        <BarChart
          width={400}
          height={200}
          data={data}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8"  />
         
        </BarChart>
    </div>
  )
}
