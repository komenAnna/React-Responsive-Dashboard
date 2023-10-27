import React, { useState } from 'react'
import './Card.css'
import {  LayoutGroup } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { UilTimes } from '@iconscout/react-unicons'
import Chart from 'react-apexcharts'

const Card = (props) => {
    const [expanded, setExpanded] = useState(false)
  return (
    // Provides extra frames
    <LayoutGroup>  
        { expanded ? 
        <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/> : 
        <CompactCard param={props} setExpanded={()=>setExpanded(true)}/> }
    </LayoutGroup>
  )
}

// CompactCard
function CompactCard({param, setExpanded}) {
    const Png = param.png
    return(
        <div className="CompactCard"
        style={{
            background: param.color.backGround,
            boxshadow: param.color.boxShadow
        }}
        onClick={setExpanded}
        // layoutId='expandableCard'
        >
            <div className="radialBar">
                <CircularProgressbar
                value = {param.barValue}
                text = {`${param.barValue}%`}/>
                <span>{param.title}</span>
            </div>
            
            <div className="chartDetail">
                <Png/>
                <span>{param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </div>
    )
}

//Expanded Card
function ExpandedCard({param, setExpanded}) {
    const data = {
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
    
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
          },
    
          fill: {
            colors: ["#fff"],
            type: "gradient",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            colors: ["white"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: true,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
          },
        },
      };
    return (
        <div className="ExpandedCard"
        style={{
            background: param.color.backGround,
            boxshadow: param.color.boxShadow
        }}
        // layoutId='expandableCard'
        >
            <div className="close">
                <UilTimes onClick={setExpanded}/>
            </div>
            <span>{param.title}</span>
            <div className="chartContainer">
                <Chart series={param.series} type='area' options={data.options}/>
            </div>
            <span>Last 24 hours</span>
        </div>

    )
}

export default Card