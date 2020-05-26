import React , {Component} from "react";
import "./NewPostButton.style.css";

class NewPostButton extends Component{
    render(){
        return(
    <button
    className="NewPost"
    onClick={this.props.onClick}>
    +
    </button>
        );
    }
}
export default NewPostButton;