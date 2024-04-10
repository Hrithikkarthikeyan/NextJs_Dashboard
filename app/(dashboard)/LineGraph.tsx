'use client';
import { useEffect } from 'react'
import { Chart } from 'chart.js/auto';
var chart: Chart<"line", number[], string>;

function LineGraph() {
  useEffect(() => {
    var ctx = document.getElementById('lineChart').getContext('2d');
    if(chart){
      chart.destroy();
    }
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Mon", "", "Tue", "", "Wed", "", "Thu", "", "Fri", "", "Sat", "", "Sun"],
        datasets: [{
          data: [10, 8, 21, 40, 50, 22, 44, 12, 17, 25, 21, 17, 43, 55],
          borderColor: "#ffa500",
          backgroundColor: "#ffc04d",
          fill: false,
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem) {
              return tooltipItem.yLabel;
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            display: false,
            grid:{
                display:false
            }
          },
          
          
        },
      }
    });
  }, []);
  return (
    <>
      <div className=' rounded-xl w-[600px] h-[180px]'>
        <canvas id='lineChart'></canvas>
      </div>
    </>
  )
}

export default LineGraph