import React, {useState} from 'react';
import ReactApexChart from 'react-apexcharts'

const Chart1line = ()=> {

  const [State, setState] = useState({
    series: [
      {
        name: 'South',
      },
      {
        name: 'North',
      },
      {
        name: 'Central',
      }
    ],
    options: {
      chart: {
        type: 'area',
        height: 350,
        stacked: true,
        events: {
          selection: function (chart, e) {
            console.log(new Date(e.xaxis.min))
          }
        },
      },
      colors: ['#008FFB', '#00E396', '#CED4DC'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8,
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left'
      },
      xaxis: {
        type: 'datetime'
      },
      
      tooltip: {
        x: {
          format: "category",
        },
        fixed: {
          enabled: false,
          position: 'topRight'
        }
      },
      grid: {
        yaxis: {
          lines: {
            offsetX: -30
          }
        },
        padding: {
          left: 10
        }
      }
    },
  
  
  
  })


    return (
      <div >
        <ReactApexChart options={State.options} series={State.series} type="line" height={350} />
        
      </div>
    );
  }


export default Chart1line;

