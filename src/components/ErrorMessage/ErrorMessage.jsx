import React from 'react';
import "./ErrorMessages.style.css";

const ErrorMessages =(props) =>{
    if(!props.messages.length){
        return null;
    }
    return(
        <div className="errormessage">
            {props.messages.map((msg,idx)=>(
                <div key={idx}
                className="ErrorMessages_item">
                    {msg}
                    </div>
            ))}
        </div>
    );
}

ErrorMessages.propTypes={
    messages:React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};
export default ErrorMessages;