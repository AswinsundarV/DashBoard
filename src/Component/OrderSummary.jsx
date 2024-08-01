import { PieChart, Pie, Cell,Legend } from "recharts";

const data = [
  { name: "Group A", value: 300 },
  { name: "Group B", value: 600 },
  { name: "Group C", value: 300 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


export default function OrderSummary() {
  return (
    <div>
        <PieChart width={400} height={200}>
      <Pie
        data={data}
       
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
       
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
              </Pie>
              <Legend verticalAlign="bottom" />
               </PieChart>
    </div>
  )
}
