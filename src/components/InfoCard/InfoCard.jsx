import React, { useState } from 'react'
import { UilPen } from '@iconscout/react-unicons'
import './InfoCard.css'
import ProfileModal from '../ProfileModal/ProfileModal';
const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false);
    return (
        <div className="InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                    <UilPen width='2rem' height='1.2rem' onClick={() => { setModalOpened(true) }} />
                    <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
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