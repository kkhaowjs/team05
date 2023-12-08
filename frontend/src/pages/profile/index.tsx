import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const goReviewPage = () => {
        navigate('profile/review')
    }
    return (<>
        <div>Profile</div>
        <button onClick={goReviewPage}>Review</button>
    </>
    )
}

export default Profile