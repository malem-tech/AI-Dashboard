import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
//import './Search.css';
const options = {
  chart: {
    type: 'bar',
    height:"200px",
    backgroundColor: 'rgba(27,31,56,.96)',
    borderWidth: 0,
 
},
title: {
    text: 'Total Amount by Company Code',
    align: 'left',
    style: {
      color: '#FFFFFF',
      fontSize: '.9rem',
      color:"rgba(255,255,255,.8)"
   }

},
legend: {
  enabled: false
},
xAxis: {
    categories: ['Africa', 'America', 'Asia', 'Europe'],
    labels: {
      style: {
         color: '#FFFFFF',
         font: '.8rem',

      }
   },
   lineColor: 'rgba(27,31,56,.5)',
   tickLength: 0,

},
plotOptions: {
  series: {
      borderWidth: 0,
     
  }
},
yAxis: {
  tickInterval: 100,

    min: 0,
    title: false,
    gridLineWidth: 0,
    display: false,
    labels:{
      enabled:false,
    },
 
},




series: [{
    data: [107, 31, 635, 203],

},       
]
}
class BarChart extends React.Component {
  
  render() {
    return <div class="container" style={{height:"200px"}}
              autoid = "companycode-chart"> 
       <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
    </div>
    
  }
}

export default BarChart;