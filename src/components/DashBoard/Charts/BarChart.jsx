import React from 'react'
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2'
import millify from 'millify';
import { useMediaQuery } from 'react-responsive'

export const BarChart =({Color,theData,theLabels})=>{
  const isMobile = useMediaQuery({query:`(max-width:576px)`})

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
                drawBorder:false,
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
                display:false,
                drawBorder:false
            },
            ticks:{
                callback: function(datalaBel, index){
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
          <div style={isMobile?{padding:'30px'}:{}}>
            <Bar options={options} data={data} />
          </div>
        )
    } 