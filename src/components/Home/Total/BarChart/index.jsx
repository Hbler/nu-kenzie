import React from "react";
import Chart from "react-apexcharts";

export default function BarChart({ transactionData }) {
  return (
    <>
      <div id="chart">
        <Chart
          series={transactionData.series}
          options={{
            chart: {
              type: "bar",
              stacked: true,
              stackType: "100%",
              offsetX: -10,
              toolbar: {
                show: false,
              },
            },
            plotOptions: {
              bar: {
                horizontal: true,
                barHeigth: "100%",
              },
            },
            colors: ["#03b898", "#e9ecef"],
            grid: { show: false },

            stroke: {
              width: 1,
              colors: ["#fff"],
            },
            title: {
              text: "",
            },
            xaxis: {
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
              },
            },
            yaxis: {
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
              },
            },
            legend: {
              show: false,
            },
            tooltip: {
              y: {
                formatter: function(val) {
                  return "R$" + val;
                },
              },
            },
            fill: {
              opacity: 1,
            },
          }}
          type="bar"
          height={"100px"}
          width={"100%"}
        />
      </div>
    </>
  );
}
