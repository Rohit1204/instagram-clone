import React from 'react';
import PropTypes from 'prop-types';
import './NotificationButton.style.css'; 
const NotificationButton = (props) => {
     if (props.notificationsCount === 0) 
     {
          return ( 
          <a className="NotificationButton_button" href="/"> 
          <i className="fa fa-heart-o Headernav-icon" aria-hidden="true"/> 
          </a> 
          ); 
        } 
        else
         {
              return (
                   <a className="NotificationButtonbutton NotificationButton_button--active" href="/">
                        {props.notificationsCount}
                         </a>
                          );
                         }
                 } 
NotificationButton.propTypes = {
     notificationsCount: PropTypes.number.isRequired,
}
NotificationButton.defaultProps = { 
    notificationsCount: 0,
} 
          
export default NotificationButton;