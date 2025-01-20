import React from "react";
import '../../App.css'
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, 
  BarElement, Title, Tooltip, Legend, ArcElement,} from 'chart.js';

  ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () =>{

  const BarData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Spendings ($)',
        data : [120000, 150000, 160000, 160000, 160000, 160000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ]
  }

  const PieData ={
    labels: ['HDFC', 'SBI', 'HSBC', 'KOTAK' ],
    datasets: [
      {
        data : [120000, 150000, 160000, 160000],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#AA65DB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#AA65DB'],
      }
    ]
  }

    return (
      <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Revenue</h3>
          <p>$120,000</p>
        </div>
        <div className="card">
          <h3>New Customers</h3>
          <p>1,200</p>
        </div>
        <div className="card">
          <h3>Active Users</h3>
          <p>3,500</p>
        </div>
        <div className="card">
          <h3>Growth Rate</h3>
          <p>12%</p>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart">
          <h3>Revenue Trend</h3>
          <Bar data={BarData} />
        </div>
        <div className="chart">
          <h3>Department Allocation</h3>
          <Pie data={PieData} />
        </div>
      </div>
    </div>
    )
}

export default Dashboard;