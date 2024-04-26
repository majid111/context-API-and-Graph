import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import CustomShapeBarCharts from "../Custom shape Barchaarts/CustomShapeBarCharts";

const Graph = () => {

    const studentData = [
        { id: 1, name: "Alice", math: 85, science: 80, literature: 75, socialScience: 70 },
        { id: 2, name: "Bob", math: 78, science: 75, literature: 70, socialScience: 65 },
        { id: 3, name: "Charlie", math: 92, science: 85, literature: 80, socialScience: 78 },
        { id: 4, name: "David", math: 65, science: 68, literature: 62, socialScience: 60 },
        { id: 5, name: "Emma", math: 88, science: 90, literature: 85, socialScience: 82 },
        { id: 6, name: "Frank", math: 72, science: 82, literature: 78, socialScience: 74 },
        { id: 7, name: "Grace", math: 90, science: 88, literature: 84, socialScience: 80 },
        { id: 8, name: "Henry", math: 81, science: 79, literature: 76, socialScience: 72 },
        { id: 9, name: "Ivy", math: 87, science: 86, literature: 80, socialScience: 75 },
        { id: 10, name: "Jack", math: 70, science: 72, literature: 65, socialScience: 68 },
      ];
      
    return (
        <div>
            <h2>Graph of Student Data</h2>
            <LineChart width={800} height={600} data={studentData}>
                <Tooltip></Tooltip>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'math'} stroke="Blue"></Line>
                <Line dataKey='literature' stroke="Yellow"></Line>
            </LineChart>
            <BarChart width={800} height={600} data={studentData}>
                <Tooltip></Tooltip>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Bar dataKey='math' fill="Green"></Bar>
            </BarChart>
            <div>
                <h3>Custom Charts</h3>
                <CustomShapeBarCharts></CustomShapeBarCharts>
            </div>
        </div>
    );
};

export default Graph;