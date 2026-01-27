import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function StravaChart({ data }) {
  if (!data || !data.length) {
    return <p>No Strava data available.</p>;
  }

  const chartData = data.map(activity => ({
    date: new Date(activity.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    distance: parseFloat(activity.distance),
    type: activity.type,
  }));

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" fontSize={12} />
          <YAxis fontSize={12} label={{ value: 'Miles', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Area type="monotone" dataKey="distance" stroke="#fc4c02" fill="#fc4c02" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
