import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';


export const LineChart =({lineColor,theData,theLabels})=>{
const options = {
    responsive: true,
    maintainAspectRatio:false,
  plugins: {
    datalabels: { //THis is for the different digits on the line points
        display:true
      },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
    legend:{
        display:false
    }
  },
  scales:{
    x:{
        display:false
    },
    y:{
        display:false
    }
  }
}
const labels = theLabels
const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: theData,
        borderColor: lineColor, //This is for the color of the Line
        tension:0.5,
        pointRadius:1, //This is for the size of the points on the line
        borderWidth:3.5,
        
      },
  
    ]
  };
    return(
    <Line options={options} data={data} />
    )
}

export const LineChart2 =({lineColor,theData,theLabels})=>{
    const options = {
        responsive: true,
        maintainAspectRatio:false,
      plugins: {
        datalabels: { //THis is for the different digits on the line points
            display:true
          },
        title: {
          display: false,
          text: 'Chart.js Line Chart',
        },
        legend:{
            display:false
        }
      },
      scales:{
        x:{
            display:true,
            grid:{
                display:false
            }
        },
        y:{
            stacked:true,
            grid:{
                borderDash:[10,10]
            },
            ticks:{
                display:false
            }
        }
      }
    }
    const labels = theLabels
    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: theData,
            borderColor: lineColor, //This is for the color of the Line
            tension:0.5,
            pointRadius:5, //This is for the size of the points on the line
            borderWidth:7,
            
          },
      
        ]
      };
        return(
        <Line options={options} data={data} />
        )
    }