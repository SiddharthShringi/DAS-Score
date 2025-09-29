import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
} from "recharts";

type LinePoint = { category: string; score: number };

type LineChartProps = {
  lineGraphData: LinePoint[];
};

export default function LineChartPage({ lineGraphData }: LineChartProps) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[800px]">
        <div className="h-64 sm:h-72 md:h-80 lg:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={600}
              height={300}
              data={lineGraphData}
              margin={{ top: 10, right: 30, left: 10, bottom: 40 }}
            >
              <CartesianGrid
                vertical={true}
                horizontal={false}
                strokeWidth={2}
                strokeDasharray="5 5"
              />
              <Line dataKey="score" stroke="#818cf8" type="monotone" />

              <XAxis
                dataKey="category"
                type="category"
                allowDuplicatedCategory={false}
                tick={{ fontSize: 15 }}
                angle={-30}
                stroke="#818cf8"
                textAnchor="end"
                interval={0}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                domain={[-10, 10]}
                ticks={[-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]}
                allowDecimals={false}
                interval={0}
              />
              <ReferenceLine y={0} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
