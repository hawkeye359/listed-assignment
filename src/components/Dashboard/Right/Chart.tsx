import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = [
  { date: '2023-06-01', users: 120 },
  { date: '2023-06-02', users: 130 },
  { date: '2023-06-03', users: 150 },
  { date: '2023-06-04', users: 140 },
  { date: '2023-06-05', users: 160 },
  { date: '2023-06-06', users: 180 },
  { date: '2023-06-07', users: 200 },
  { date: '2023-06-08', users: 220 },
  { date: '2023-06-09', users: 240 },
  { date: '2023-06-10', users: 230 },
  { date: '2023-06-11', users: 210 },
  { date: '2023-06-12', users: 200 },
  { date: '2023-06-13', users: 180 },
  { date: '2023-06-14', users: 160 },
  { date: '2023-06-15', users: 150 },
  { date: '2023-06-16', users: 170 },
  { date: '2023-06-17', users: 190 },
  { date: '2023-06-18', users: 210 },
  { date: '2023-06-19', users: 220 },
  { date: '2023-06-20', users: 200 },
  { date: '2023-06-21', users: 180 },
  { date: '2023-06-22', users: 170 },
  { date: '2023-06-23', users: 150 },
  { date: '2023-06-24', users: 130 },
  { date: '2023-06-25', users: 120 },
  { date: '2023-06-26', users: 140 },
  { date: '2023-06-27', users: 160 },
  { date: '2023-06-28', users: 180 },
  { date: '2023-06-29', users: 200 },
  { date: '2023-06-30', users: 220 },
];
function formatDataForChartjs() {
  const dataArray: number[] = [];
  const labelsArray: string[] = [];
  data.forEach((e) => {
    dataArray.push(e.users);
    labelsArray.push(e.date);
  });

  return {
    labels: labelsArray,
    datasets: [
      {
        data: dataArray,
      },
    ],
  };
}
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

function Chart() {
  return <Line data={formatDataForChartjs()} options={chartOptions} />;
}
export default Chart;
