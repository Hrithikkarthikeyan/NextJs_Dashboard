'use client';
import { useEffect } from 'react'
import { Chart } from 'chart.js/auto';
var chart: Chart<"bar", number[], string>;
function BarGraph() {
  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    if(chart){
      chart.destroy();
    }
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                data: [66, 144, 146, 116, 107, 131, 43, 69, 32, 80, 120, 100],
                label: "Applied",
                borderColor: "rgb(109, 253, 181)",
                backgroundColor: "rgb(109, 253, 181,0.5)",
                borderWidth: 2
            }
            ]
        },
        options: {
          // barPercentage: 0.5,
          plugins: {
            legend: {
              display: false
            }
          },
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              display: false,
              grid:{
                  display:false
              }
            },
            x: {
              beginAtZero: true,
              grid:{
                  display:false
              }
            }
          },
        }
    });
}, [])


return (
    <>
      <div className="">
        <div className=' rounded-xl w-[600px] h-[160px]'>
          <canvas id='myChart'></canvas>
        </div>
      </div>
    </>
)
}

export default BarGraph