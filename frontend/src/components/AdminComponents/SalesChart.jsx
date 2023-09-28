import React, { useEffect, useRef } from 'react'
import Chart from "chart.js/auto";


const SalesChart = () => {
    const salesChartRef = useRef(null)
    const salesChartInstance = useRef(null)

    useEffect(() => {
        const data = [
          {
            year: 2010,
            count: 10,
          },
          {
            year: 2011,
            count: 20,
          },
          {
            year: 2012,
            count: 15,
          },
          {
            year: 2013,
            count: 25,
          },
          {
            year: 2014,
            count: 22,
          },
          {
            year: 2015,
            count: 30,
          },
          {
            year: 2016,
            count: 13,
          },
          {
            year: 2017,
            count: 28,
          },
          {
            year: 2018,
            count: 25,
          },
          {
            year: 2019,
            count: 28,
          },
          {
            year: 2020,
            count: 8,
          },
          {
            year: 2021,
            count: 14,
          },
        ];

        if (salesChartRef.current) {
            if (salesChartInstance.current) {
                salesChartInstance.current.destroy()
            }

            salesChartInstance.current = new Chart(salesChartRef.current, {
              type: "scatter",
              options: {
                responsive: true,
                plugins: {
                  title: {
                    display: true,
                    text: "Credit Sales Overview",
                  },
                },
              },
              data: {
                labels: data.map((row) => row.year),
                datasets: [
                  {
                    type: "line",
                    label: "Credited Sales",
                    data: data.map((row) => row.count),
                    backgroundColor: "rgba(114, 219, 132, 0.9)",
                    borderColor: "rgb(244, 162, 235)",
                  },
                  {
                    type: "bar",
                    label: "Credited Sales",
                    data: data.map((row) => row.count - 2),
                    backgroundColor: "rgb(113, 63, 18, 0.5)",
                  },
                  {
                    type: "line",
                    label: "Credited Sales",
                    data: data.map((row) => row.count + 5),
                    backgroundColor: "rgba(244, 219, 132, 0.9)",
                    borderColor: "rgb(54, 162, 235)",
                  },
                ],
              },
            });
        }
    }, [])
  return (
    <React.Fragment>
      <section className="w-full border p-4 rounded-lg flex flex-col shadow">
        <div className=" mb-3 flex items-center gap-2 justify-end">
          <p className="text-xs font-semibold p-1 px-2 rounded text-yellow-700 bg-yellow-900/20  cursor-pointer">
            Today
          </p>
          <p className="text-xs font-semibold  p-1 px-2 rounded border cursor-pointer">
            This Week
          </p>
          <p className="text-xs font-semibold p-1 px-2 rounded border cursor-pointer">
            This Month
          </p>
        </div>
        <canvas
          ref={salesChartRef}
          className="w-full p-2 border bg-yellow-900/20 text-cyan-500 rounded-md"
        />
        <div className="w-full mt-3">
          <h1 className="text-sm font-bold text-gray-500">
            Credited Customers
          </h1>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SalesChart
