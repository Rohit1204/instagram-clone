import React from 'react';
import './FollowButton.style.css'; 

const FollowButton = (props) => { 
    if (props.isFollowing) { 
        return ( 
        <button 
        className="FollowButton_root FollowButton--following" 
        onClick={props.onUnfollowClick}> 
        Following
        </button> 
        ) 
    } 
    else { 
        return ( 
        <button 
        className="FollowButton_root" 
        onClick={props.onFollowClick}> 
        Follow 
        </button> 
        ) 
    }}
    
    export default FollowButton;