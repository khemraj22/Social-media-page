import React from 'react'
import { TrendData } from '../../data/TrendData'
import './TrendCard.css'
const TrendCard = () => {
    return (
        <div className="TrendCard">
            <h3>Trend for you...</h3>
            {TrendData.map((trend, id) => {
                return <div className="trend">
                    <span>#{trend.name}</span>
                    <span>{trend.shares}k shares</span></div>
            })}
        </div>

    )
}

export default TrendCard