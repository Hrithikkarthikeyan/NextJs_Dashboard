'use client';
import { useEffect } from 'react'
import { Chart } from 'chart.js/auto';
var chart: Chart<"line", number[], string>;

function SmoothLineGraph() {
  useEffect(() => {
    const canvas = document.getElementById('smoothLineChart');
    const ctx: CanvasRenderingContext2D = (canvas as HTMLCanvasElement).getContext('2d')!;
    if(chart){
      chart.destroy();
    }
    chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
          data: [10, 8, 21, 60, 50, 22, 44],
          borderColor: "#ffa500",
          backgroundColor: "#ffc04d",
          fill: true,
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid:{
                display:false
            }
          },
          x: {
            beginAtZero: true,
            grid:{
                display:false
            }
          },
        },
        elements: {
          line: {
            tension: 0.4
          }
        }
      }
    });
  }, []);
  return (
    <div className="mt-5">
      <div className=' rounded-xl w-[280px] h-[250px]'>
        <canvas id='smoothLineChart'></canvas>
      </div>
    </div>
  )
}

export default SmoothLineGraph