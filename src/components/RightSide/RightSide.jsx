import React from 'react'
import Home from '../../img/home.png'
import Notification from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import './RightSide.css'
import TrendCard from '../TrendCard/TrendCard'
const RightSide = () => {
    return (
        <div className="RightSide">
            <div className="navIcons">
                <img src={Home} alt="Home" />
                <UilSetting />
                <img src={Notification} alt="Notification" />
                <img src={Comment} alt="comment" />
            </div>
            <TrendCard />
            <button className='button r-button'>Share</button>
        </div>
    )
}

export default RightSide