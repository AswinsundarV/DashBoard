import { PieChart, Pie, Cell,Legend } from "recharts";

const data = [
  { name: "Vendor", value: 109270},
  { name: "Employe Salary", value: 78050 },
  { name: "Travel", value: 78050 },
  { name: "Hotel", value: 46830}
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];


export default function TotalExp() {
  return (
    <div>
       <h2>3,12,200</h2>
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
              <h2>3,12,200</h2>
              <Legend verticalAlign="bottom" />
               </PieChart>
               
    </div>
  )
}
