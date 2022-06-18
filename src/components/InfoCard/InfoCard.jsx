import React from 'react'
import { UilPen } from '@iconscout/react-unicons'
import './InfoCard.css'
const InfoCard = () => {
    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                    <UilPen width='2rem' height='1.2rem' />
                </div>
            </div>
            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>in relationship</span>
            </div>
            <div className="info">
                <span>
                    <b>Lives </b>
                </span>
                <span>Delhi</span>
            </div>
            <div className="info">
                <span>
                    <b>Work at </b>
                </span>
                <span>institute</span>
            </div>
            <button className='button logout-button'>Log out</button>
        </div>
    )
}

export default InfoCard