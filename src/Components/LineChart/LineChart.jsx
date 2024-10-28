import { LineChart as LChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import PropTypes from 'prop-types';

const LineChart = () => {
    const students = [
        { "name": "Alice", "math": 85, "physics": 78, "chemistry": 82 },
        { "name": "Bob", "math": 78, "physics": 72, "chemistry": 76 },
        { "name": "Charlie", "math": 92, "physics": 88, "chemistry": 90 },
        { "name": "Diana", "math": 67, "physics": 65, "chemistry": 70 },
        { "name": "Ethan", "math": 88, "physics": 84, "chemistry": 86 },
        { "name": "Fiona", "math": 74, "physics": 70, "chemistry": 72 },
        { "name": "George", "math": 95, "physics": 90, "chemistry": 94 },
        { "name": "Hannah", "math": 80, "physics": 76, "chemistry": 79 },
        { "name": "Ivy", "math": 69, "physics": 68, "chemistry": 71 },
        { "name": "Jack", "math": 90, "physics": 85, "chemistry": 88 }
    ];

    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const data02 = [
        { name: 'Group A', value: 250 },
        { name: 'Group B', value: 150 },
        { name: 'Group C', value: 100 },
        { name: 'Group D', value: 50 },
    ];

    // Combine data01 and data02
    const combinedData = data01.map((entry, index) => ({
        name: entry.name,
        value: entry.value + (data02[index] ? data02[index].value : 0),
    }));

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className='flex lg:flex-row md:flex-col max-sm:flex-col items-center justify-center'>
            <ResponsiveContainer width="100%" height={400}>
                <LChart data={students}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="math" stroke="#8884d8" />
                    <Line type="monotone" dataKey="physics" stroke="red" />
                    <Line type="monotone" dataKey="chemistry" stroke="green" />
                </LChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="50%" height={400}>
                <PieChart>
                    <Pie data={combinedData} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label>
                        {combinedData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

LineChart.propTypes = {};

export default LineChart;
