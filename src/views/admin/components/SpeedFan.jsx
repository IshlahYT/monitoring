import React, { useState, useEffect, useRef } from "react";
import Card from "components/card";
import { lineChartOptionsSpeedFan } from "variables/charts";
import Chart from "react-apexcharts";

const generateDummyTemperature = () => Math.floor(Math.random() * (90 - 30 + 1)) + 30;

const SpeedFan = () => {
  const [series, setSeries] = useState([{ name: "Temperature", data: [] }]);
  const chartDeviation = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeries((prevSeries) => {
        const newData = [...prevSeries[0].data];
        const now = new Date().getTime();
        
        // Add new data point
        newData.push({
          x: now,
          y: generateDummyTemperature(),
        });

        // Remove data points older than 1 minute
        const oneMinuteAgo = now - 60000;
        const filteredData = newData.filter(dataPoint => dataPoint.x >= oneMinuteAgo);

        return [{ name: "Temperature", data: filteredData }];
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (series[0].data.length < 2) return;

    const currentValue = series[0].data[series[0].data.length - 1].y;

    if (currentValue < 40) {
      chartDeviation.current.style.backgroundColor = "rgba(16, 185, 129, 1)";
    } else if (currentValue >= 40 && currentValue < 60) {
      chartDeviation.current.style.backgroundColor = "rgba(251, 191, 36, 1)";
    } else {
      chartDeviation.current.style.backgroundColor = "rgba(244, 63, 94, 1)";
    }

    chartDeviation.current.innerHTML = `${currentValue}°C`;
  }, [series]);

  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
      <div className="mb-auto flex items-center justify-between px-6">
        <span className="flex items-center justify-center text-xl font-semibold text-gray-600">Temperature Monitoring</span>
        <div ref={chartDeviation} className="flex items-center justify-center text-md font-bold text-white rounded-lg h-8 w-14"></div>
      </div>
      

      <div className="px-6 flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="h-full w-full">
          <Chart
            options={lineChartOptionsSpeedFan}
            series={series}
            type="area"
            height="350"
          />
        </div>
      </div>
    </Card>
  );
};

export default SpeedFan;