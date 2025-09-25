type LinePoint = { category: string; score: number };

type LineChartProps = {
  lineGraphData: LinePoint[];
};

export default function LineChart({ lineGraphData }: LineChartProps) {
  console.log({ lineGraphData });
  return <div>LineChart</div>;
}
