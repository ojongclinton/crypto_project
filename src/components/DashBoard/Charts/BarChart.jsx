import React from 'react'
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2'
import millify from 'millify';

export const BarChart =({Color,theData,theLabels})=>{
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
            grid:{
                display:false
            },
            ticks:{
                font:{
                    size:8
                }
            }
        },
        y:{
            grid:{
                display:false
            },
            ticks:{
                callback: function(datalaBel, index){
                    console.log(datalaBel , index)
                    const label = millify(datalaBel)
                    return label
                },
                font:{
                    size:10
                }
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
            backgroundColor: Color, //This is for the color of the Line 
            barThickness: 20,           
          },
      
        ]
      };
        return(
        <Bar options={options} data={data} />
        )
    } 