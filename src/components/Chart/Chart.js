import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar.js';

const Chart =(props)=>{
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    return(
        <div className="chart">
            {props.dataPoints.map((dataPoint)=>(
                <ChartBar
                key={dataPoint.id}
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
                ></ChartBar>
            ))}
        </div>
    )

}
export default Chart;