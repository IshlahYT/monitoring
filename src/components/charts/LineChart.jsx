import Chart from "react-apexcharts";
// import Chart from "chart.js";


const LineChart = (props) => {
  const { series, options } = props;

  return (
    <Chart
      options={options}
      type="area"
      width="100%"
      height="100%"
      series={series}
    />
  );
};

export default LineChart;
