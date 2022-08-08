import React from "react";
import { Bar } from "react-chartjs-2";
import "../myPage.component.ts";

const Graph = (props) => {
  return (
    <div className="h-1/4 w-1/4 text-center">
      <div className="w-full">
        <h1 className="font-bold underline w-fit mx-auto">{props.heading}</h1>
      </div>
      <div>
        <Bar
          data={{
            labels: ["Ideal", "Yours","Mean"],
            datasets: [
              {
                label: "Psychometric Score",
                data: [props.idealData, props.data,props.average],
                backgroundColor: [
                  "rgba(54, 162, 235, 0.5)",
                  "rgba(255, 99, 132, 0.5)",
                  "rgba(137, 6, 244, 0.5)"

                ],
                borderColor: ["rgba(54, 162, 235, 5)", "rgba(255, 99, 132, 5)","rgba(137, 6, 244, 5)"],
                borderWidth: 1,
              },
            ],
          }}
          height={1000}
          width={2000}
          options={{
            // maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Graph;
