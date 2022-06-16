import React from 'react'
import './ProfileCard.css'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'

const ProfileCard = () => {
    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={Cover} alt='CoverImage' />
                <img src={Profile} alt='ProfileImage' />
            </div>
            <div className="ProfileName">
                <span>Zendd HR</span>
                <span>Senior UI/UX Designer</span>
            </div>

            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>4545</span>
                        <span>following</span>
                    </div>
                    <div className="vl"></div>
                    <div className="follow">
                        <span>1</span>
                        <span>followers</span>
                    </div>
                </div>
                <hr />
            </div>
            <span> My Profile</span>

        </div>
    )
}

export default ProfileCard