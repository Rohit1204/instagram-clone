import React , {Component} from "react";
import "./LikeButton.style.css";

class LikeButton extends Component{
    constructor(props){
     super(props);
     this.handleClick = this._handleClick.bind(this);
    }
    _handleClick(event){
        event.preventDefault();
        if (this.props.liked){
            this.props.onDislike();
        }
        else{
            this.props.onLike();
        }
    }
    render(){
        return(
    <button
    className="likeButton"
    onClick={this.handleClick}>
        {this.props.liked?
        (<i className="fa fa-heart LikeButton__icon LikeButton__icon--liked"/>):
        (<i className="fa fa-heart-o LikeButton__icon"/>)}
    </button>
        );
    }
}
export default LikeButton;